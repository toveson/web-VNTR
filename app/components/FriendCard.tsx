import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

interface FriendCardProps {
  showButton?: boolean;
  handleButtonClick?: () => void;
  friendData: any;
}

export default function FriendCard(props: FriendCardProps) {
  const { showButton, handleButtonClick, friendData } = props;
  return (
    <Stack style={{ backgroundColor: "#F8EBDE", flexGrow: 1 }}>
      <Card raised={true} style={{ backgroundColor: "#542F12" }}>
        <CardContent>
          <Stack spacing={1} alignItems="center">
            <Avatar
              alt="User Image"
              src="https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png"
              sx={{
                border: "10px solid #73C7E7",
                width: 200,
                height: 200,
                backgroundColor: "#F8EBDE",
              }}
            />
            <Typography
              variant="h5"
              style={{ color: "#F8EBDE", textAlign: "center" }}
            >
              {friendData.name}
            </Typography>
          </Stack>
          {showButton && (
            <Stack direction="row" style={{ justifyContent: "center" }}>
              <Button
                onClick={handleButtonClick}
                style={{ backgroundColor: "#73C7E7", color: "#F8EBDE" }}
              >
                Request/Accept
              </Button>
            </Stack>
          )}
        </CardContent>
      </Card>
    </Stack>
  );
}
