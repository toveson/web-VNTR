import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

interface GroupCardProps {
  buttonText: string;
  groupData: any;
  handleButtonClick: () => void;

}

export default function GroupCard(props: GroupCardProps) {
  const {buttonText, groupData, handleButtonClick} = props;


  return (
    <Stack style={{ width: "40%" }}>
      <Card
        raised={true}
        style={{ backgroundColor: "#542F12", margin: "10px" }}
      >
        <CardContent>
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack spacing={2}>
              <Avatar
                alt="User Image"
                src={groupData.img}
                sx={{
                  border: "6px solid #73C7E7",
                  width: 200,
                  height: 200,
                  backgroundColor: "#F8EBDE",
                }}
              />
              <Stack direction="row" style={{ justifyContent: "center" }}>
                <Button
                  onClick={handleButtonClick}
                  style={{ backgroundColor: "#73C7E7", color: "#F8EBDE" }}
                >
                  {buttonText}
                </Button>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Typography
                variant="h5"
                style={{
                  backgroundColor: "#73C7E7",
                  color: "#F8EBDE",
                  textAlign: "center",
                }}
              >
                {groupData.name}
              </Typography>
              <Typography
                variant="h5"
                style={{
                  backgroundColor: "#73C7E7",
                  color: "#F8EBDE",
                  textAlign: "center",
                }}
              >
                {groupData.info}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
