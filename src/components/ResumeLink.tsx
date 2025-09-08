import React from "react";
import { Button } from "@mui/material";
import resume from "../Assets/Documents/Softwaredeveloper_Mukilan.pdf";
const ResumeLink = () => {
  return (
    <Button
      className="btn-class"
      sx={{ width: "fit-content" }}
      variant="contained"
      color="primary"
      href={resume}
      download="Softwaredeveloper_Mukilan.pdf"
      target="_blank"
      rel="noopener noreferrer">
      Click Me
    </Button>
  );
};

export default ResumeLink;
