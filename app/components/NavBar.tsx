"use client";

import { Stack, Typography, IconButton, Tooltip, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import {
  Dashboard as DashboardIcon,
  DirectionsCar as TripsIcon,
  EmojiEvents as AchievementsIcon,
  People as FriendsIcon,
  Groups as GroupsIcon,
  Chat as ChatIcon,
  Event as EventsIcon,
  Add as MinimizeIcon,
  VisibilityOff as HideIcon,
  ExitToApp as SignOutIcon,
} from "@mui/icons-material";
import { useNavBarContext } from "../Context/navBarContext";

export default function NavBar() {
  const { isHidden, setIsHidden, currentPage, setCurrentPage } =
    useNavBarContext();
  const [isMini, setIsMini] = useState(false);

  const topButtons = [
    { label: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
    { label: "Trips", href: "/trips", icon: <TripsIcon /> },
    {
      label: "Achievements",
      href: "/achievements",
      icon: <AchievementsIcon />,
    },
    { label: "Friends", href: "/friends", icon: <FriendsIcon /> },
    { label: "Groups", href: "/groups", icon: <GroupsIcon /> },
    { label: "Chat", href: "/chat", icon: <ChatIcon /> },
    { label: "Events", href: "/events", icon: <EventsIcon /> },
  ];
  const bottomButtons = [
    {
      label: isMini ? "Maximize" : "Minimize",
      icon: <MinimizeIcon />,
      onClick: () => setIsMini(isMini ? false : true),
    },
    {
      label: "Hide",
      icon: <HideIcon />,
      onClick: () => setIsHidden(isHidden ? false : true),
    },
    {
      label: "Sign Out",
      icon: <SignOutIcon />,
      onClick: () => console.log("Sign Out clicked"),
    },
  ];

  return (
    <>
      {isMini && !isHidden && (
        <Stack
          spacing={1}
          alignItems="center"
          style={{
            backgroundColor: "#542F12",
            width: "60px",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={1} style={{ paddingTop: "15px" }}>
            {topButtons.map((button) => (
              <Link href={button.href} passHref key={button.label}>
                <Tooltip title={button.label} placement="left">
                  <IconButton
                    onClick={() => setCurrentPage(button.label)}
                    style={{
                      backgroundColor:
                        currentPage === button.label ? "#73C7E7" : "#4E8448",
                      color: "#F8EBDE",
                    }}
                  >
                    {button.icon}
                  </IconButton>
                </Tooltip>
              </Link>
            ))}
          </Stack>

          <Stack style={{ paddingBottom: "15px" }} spacing={1}>
            {bottomButtons.map((button) => (
              <Tooltip title={button.label} placement="left" key={button.label}>
                <IconButton
                  onClick={button.onClick}
                  style={{
                    backgroundColor: "#4E8448",
                    color: "#F8EBDE",
                  }}
                >
                  {button.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Stack>
      )}

      {!isMini && !isHidden && (
        <Stack
          spacing={1}
          alignItems="center"
          style={{
            backgroundColor: "#542F12",
            width: "180px",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={1} style={{ paddingTop: "15px" }}>
            {topButtons.map((button) => (
              <Link href={button.href} passHref key={button.label}>
                <Button
                  onClick={() => setCurrentPage(button.label)}
                  style={{
                    backgroundColor:
                      currentPage === button.label ? "#73C7E7" : "#4E8448",
                    width: "150px",
                  }}
                >
                  <Typography style={{ color: "#F8EBDE" }}>
                    {button.label}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Stack>
          <Stack style={{ paddingBottom: "15px" }} spacing={1}>
            {bottomButtons.map((button, index) => (
              <Button
                key={index}
                onClick={button.onClick}
                style={{
                  backgroundColor: "#4E8448",
                  width: "150px",
                }}
              >
                <Typography style={{ color: "#F8EBDE" }}>
                  {button.label}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Stack>
      )}
    </>
  );
}
