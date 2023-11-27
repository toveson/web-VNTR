import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export default function AddGroup() {
  return (
    <Stack
      style={{
        justifyContent: "center",
        width: "70%",
      }}
    >
      <Stack direction="row-reverse">
        <Button style={{ backgroundColor: "#4E8448", color: "#F8EBDE" }}>
          Create Group
        </Button>
      </Stack>
      <Stack>
        <Card
          raised={true}
          style={{ backgroundColor: "#542F12", margin: "10px" }}
        >
          <CardContent>
            <Stack direction="row" spacing={3} alignItems="center">
              <Stack spacing={2}>
                <Avatar
                  alt="User Image"
                  src="https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png"
                  sx={{
                    border: "6px solid #73C7E7",
                    width: 300,
                    height: 300,
                    backgroundColor: "#F8EBDE",
                  }}
                />
                <Stack direction="row" style={{ justifyContent: "center" }}>
                  <Stack spacing={2}>
                    <Button
                      // onClick={handleButtonClick}
                      style={{ backgroundColor: "#73C7E7", color: "#F8EBDE" }}
                    >
                      Public Group
                    </Button>
                    <Button
                      // onClick={handleButtonClick}
                      style={{ backgroundColor: "#73C7E7", color: "#F8EBDE" }}
                    >
                      Private Group
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
              <Stack spacing={2} style={{ width: "70%" }}>
                <Typography
                  variant="h5"
                  style={{
                    backgroundColor: "#73C7E7",
                    color: "#F8EBDE",
                    textAlign: "center",
                  }}
                >
                  Group Name
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    backgroundColor: "#73C7E7",
                    color: "#F8EBDE",
                    textAlign: "center",
                  }}
                >
                  Group Info: Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Aut consequuntur officiis alias reiciendis
                  quasi expedita officia eum non cumque accusantium odio
                  doloremque, nesciunt similique, obcaecati ducimus voluptas cum
                  ipsam ullam?
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
