"use client";

import { IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavBarContext } from "../Context/navBarContext";

export default function TopBar() {
  const { currentPage, isHidden, setIsHidden } = useNavBarContext();

  return (
    <Stack
      spacing={2}
      style={{
        backgroundColor: "#000000",
        padding: "5px",
        height: "50px",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: "#F8EBDE" }}>Logo goes here</Typography>
        <Stack
          direction="row"
          spacing={2}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography style={{ color: "#F8EBDE", justifyContent: "center" }}>
            {currentPage}
          </Typography>
          {isHidden && (
            <IconButton
              onClick={() => setIsHidden(isHidden ? false : true)}
              style={{
                backgroundColor: "#4E8448",
                color: "#F8EBDE",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
