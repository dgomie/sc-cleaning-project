import { Box, Typography, useMediaQuery, Tooltip } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

export default function Contact() {
  const isSmallScreen = useMediaQuery("(max-width:1200px)");
  const [tooltipText, setTooltipText] = useState("Click to copy");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Devleighs.squeaky.cleanllc@gmail.com");
    setTooltipText("Copied!");
    setTimeout(() => setTooltipText("Click to copy"), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("8604589322");
    setTooltipText("Copied!");
    setTimeout(() => setTooltipText("Click to copy"), 2000);
  };
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        marginTop: isSmallScreen ? "500px" : "0px",
      }}
    >
      <Typography
        sx={{
          fontSize: "50px",
          alignItems: "center",
          color: "white",
          textAlign: isSmallScreen ? "center" : "left",
        }}
      >
        Contact Us
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          alignItems: "center",
          color: "white",
          textAlign: isSmallScreen ? "center" : "left",
          padding: isSmallScreen ? "20px" : "0px",
        }}
      >
        Use any of our contact information below or fill out the form with any
        questions!
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: isSmallScreen ? "center" : "none",
        }}
      >
        <PhoneIcon sx={{ color: "white", marginRight: "10px" }} />
        <Tooltip title={tooltipText} arrow>
          <Typography
            sx={{
              fontSize: "22px",
              color: "white",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={handleCopyPhone}
          >
            (860) 458-9322
          </Typography>
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          justifyContent: isSmallScreen ? "center" : "none",
        }}
      >
        <MailIcon sx={{ color: "white", marginRight: "10px" }} />
        <Tooltip title={tooltipText} arrow>
          <Typography
            sx={{
              fontSize: isSmallScreen ? "18px" : "22px",
              color: "white",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={handleCopyEmail}
          >
            Devleighs.squeaky.cleanllc@gmail.com
          </Typography>
        </Tooltip>
      </Box>
    </Box>
  );
}
