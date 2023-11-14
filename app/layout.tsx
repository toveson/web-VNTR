import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
import { NavBarContextProvider } from "./Context/navBarContext";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "+VNTR",
  description: "App to organize and plan your next solo or group adventure.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
              <SideNav />
            </Stack>
          </NavBarContextProvider>
        </body>
      </html>
    </>
  );
}
