import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveFormData } from "../../redux/actions/formActions";

const Footer = ({ value, setValue, formData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSaveAndExit = () => {
    dispatch(saveFormData(formData)); // Save form data to Redux store
    navigate("/dashboard"); // Redirect to Dashboard
  };

  const handleNext = () => {
    if (value < 7) setValue(value + 1);
  };

  const handlePrevious = () => {
    if (value > 0) setValue(value - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        backgroundColor: "#fff",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      {/* Save and Exit Button (Left Side) */}
      <Button
        variant="outlined"
        onClick={handleSaveAndExit}
        sx={{ borderColor: "#9B1E26", color: "#9B1E26" ,borderRadius:"32px" }}
      >
        Save and Exit
      </Button>

      {/* Navigation Buttons (Right Side) */}
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button
          variant="outlined"
          disabled={value === 0}
          onClick={handlePrevious}
          sx={{ borderColor: "#9B1E26", color: "#9B1E26",borderRadius:"32px"  }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ backgroundColor: "#9B1E26",borderRadius:"32px", "&:hover": { backgroundColor: "#9B1E26",borderRadius:"32px"  } }}
        >
          Save and Next
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
