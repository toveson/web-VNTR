import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import { NavBarContextProvider } from "./Context/navBarContext";

export const metadata: Metadata = {
  title: "+VNTR",
  description: "App to organize and plan your next solo or group adventure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <NavBarContextProvider>
            <TopBar />
            <Stack
              direction="row"
              style={{ justifyContent: "space-between", flex: 1 }}
            >
              <Stack direction="row" style={{ flex: 1 }}>
                {children}
              </Stack>
              {/* the NavBar should only be rendered when a user is logged in */}
              <NavBar />
            </Stack>
          </NavBarContextProvider>
        </body>
      </html>
    </>
  );
}
