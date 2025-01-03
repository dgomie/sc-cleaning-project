import { api } from './config';

export const recoverPassword = async (email) => {
  try {
    const response = await api.post('/api/forgot-password', { email });
    return response.data;
  } catch (error) {
    console.error('Error recovering password:', error);
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await api.post('/api/reset-password', { token, password });
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

export const verifyPassword = async (userId, currentPassword) => {
  try {
    const response = await api.post('/api/verify-password', { userId, currentPassword });
    return response.data;
  } catch (error) {
    console.error('Error verifying password:', error);
    throw error;
  }
};

export const updatePassword = async (userId, newPassword) => {
  try {
    const response = await api.post('/api/update-password', { userId, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
};