const router = require('express').Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const nodemailer = require('nodemailer');
const base64url = require('base64url');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_UN,
    pass: process.env.GMAIL_PW,
  },
});

router.post('/forgot-password', async (req, res) => {
  console.log('Received request:', req.method, req.url);
  const { email } = req.body;
  console.log('Email received:', email);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found:', user.email);
    const token = jwt.sign({ id: user._id }, process.env.SESSION_SECRET, {
      expiresIn: '5m',
    });
    console.log('Generated token:', token);
    const encodedToken = base64url.encode(token);
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${encodedToken}`;
    console.log('Reset link:', resetLink);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset',
      text: `Click the link to reset your password: ${resetLink}`,
    };

    console.log('Sending email to:', user.email);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

router.post('/reset-password', async (req, res) => {
  const { token, password } = req.body;
  try {
    const decodedToken = base64url.decode(token);
    console.log(decodedToken);
    const decoded = jwt.verify(decodedToken, process.env.SESSION_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = password;
    await user.save();

    res
      .status(200)
      .json({ message: 'Password reset successful', success: true });
  } catch (error) {
    console.error('Error occurred:', error);
    res
      .status(500)
      .json({
        message: 'An error occurred. Please try again.',
        success: false,
      });
  }
});

router.post('/verify-password', verifyJWT, async (req, res) => {
  const { userId, currentPassword } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Password verified' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/update-password', verifyJWT, async (req, res) => {
  const { userId, newPassword } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

module.exports = router;
