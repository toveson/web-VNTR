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
  buttonText?: string;
  friendData: any;
}

export default function FriendCard(props: FriendCardProps) {
  const { showButton, buttonText, handleButtonClick, friendData } = props;
  return (
    <Card raised={true} style={{ backgroundColor: "#542F12", margin: "10px" }}>
      <CardContent>
        <Stack spacing={1} alignItems="center">
          <Avatar
            alt="User Image"
            src={friendData.img}
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
              {buttonText}
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
