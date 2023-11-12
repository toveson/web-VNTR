import { Stack, Button } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  const buttons = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Trips", href: "/trips" },
    { label: "Achievements", href: "/achievements" },
    { label: "Friends", href: "/friends" },
    { label: "Groups", href: "/groups" },
    { label: "Chat", href: "/chat" },
    { label: "Events", href: "/events" },
  ];

  return (
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
        {buttons.map((button) => (
          <Link href={button.href} passHref key={button.label}>
            <Button
              style={{
                backgroundColor: "#4E8448",
                color: "#000000",
                width: "150px",
              }}
            >
              {button.label}
            </Button>
          </Link>
        ))}
      </Stack>
      <Stack style={{ paddingBottom: "15px" }} spacing={1}>
        <Button
          style={{
            backgroundColor: "#4E8448",
            color: "#000000",
            width: "150px",
          }}
        >
          Sign Out
        </Button>
      </Stack>
    </Stack>
  );
}
