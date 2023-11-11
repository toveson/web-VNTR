import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Button } from "@mui/material";
import Link from "next/link";

export const metadata: Metadata = {
  title: "+VNTR",
  description: "App to organize and plan your next solo or group adventure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <>
      <CssBaseline />
      <html lang="en">
        <body
          style={{
            margin: 0,
            padding: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack
            spacing={2}
            style={{ backgroundColor: "#000000", height: "50px" }}
          >
            <Stack direction="row">Logo goes here</Stack>
          </Stack>
          <Stack
            direction="row"
            style={{ justifyContent: "space-between", flex: 1 }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ flex: 1 }} // Added flex: 1 to center the children Stack
            >
              {children}
            </Stack>
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
              <Stack style={{ paddingBottom: "15px" }}>
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
          </Stack>
        </body>
      </html>
    </>
  );
}
