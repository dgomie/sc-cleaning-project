import Contact from "../components/contact/contact";
import ContactForm from "../components/contact/contactform";
import { Box, useMediaQuery } from "@mui/material";

export default function ContactPage() {
  const isSmallScreen = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100" : "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Contact />
      </Box>
      <Box
        sx={{
          width: isSmallScreen ? "100" : "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContactForm />
      </Box>
    </Box>
  );
}
