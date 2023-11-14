import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <Stack style={{ backgroundColor: "#F8EBDE", flexGrow: 1 }}>
      <Typography>Login page</Typography>
      <Link href="/dashboard" passHref>
        <Button
          style={{
            backgroundColor: "#4E8448"
          }}
        >
          <Typography style={{ color: "#F8EBDE" }}>Dashboard</Typography>
        </Button>
      </Link>
    </Stack>
  );
}
