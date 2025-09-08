import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import profilePic from "../Assets/Images/IMG20230224095550.jpg";
export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={profilePic}
        sx={{ width: 200, height: 200 }}
      />
    </Stack>
  );
}
