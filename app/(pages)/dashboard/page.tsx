"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Stack, Avatar, Card, CardContent, Typography } from "@mui/material";

export default function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error.message</div>;

  return (
    user && (
      <Stack style={{ backgroundColor: "#F8EBDE", flexGrow: 1 }}>
        <Stack spacing={2}>
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={2}
            style={{
              marginTop: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="User Image"
              src="https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png"
              sx={{ border: "10px solid #542F12", width: 300, height: 300 }}
            />
            <Card
              raised={true}
              sx={{
                backgroundColor: "#542F12",
                height: "10vh",
                // width: "30vw",
                width: { sm: "70%", md: "30vw" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  style={{ color: "#F8EBDE", textAlign: "center" }}
                >
                  {user.name}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <Stack
            spacing={2}
            style={{
              marginBottom: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              raised={true}
              style={{
                backgroundColor: "#542F12",
                height: "20vh",
                width: "70%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ color: "#F8EBDE", textAlign: "center" }}
                >
                  Bio
                </Typography>
              </CardContent>
            </Card>
            <Card
              raised={true}
              style={{
                backgroundColor: "#542F12",
                height: "20vh",
                width: "70%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ color: "#F8EBDE", textAlign: "center" }}
                >
                  Interests
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    )
  );
}
