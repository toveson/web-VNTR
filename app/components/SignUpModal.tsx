import {
  Button,
  Card,
  CardContent,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

interface SignUpModalProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

export const SignUpModal: FC<SignUpModalProps> = (props) => {
  const { open, handleClose, handleOpen } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        raised={true}
        sx={{
          backgroundColor: "#542F12",
          height: "40%",
          width: { xs: "70%", sm: "60%", md: "30%" },
          maxWidth: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Typography style={{ color: "#F8EBDE" }}>
              Thank you for signing up with +VNTR, we are happy to have you. Let
              your adventures start here!
            </Typography>
            <TextField
              label="email"
              variant="outlined"
              style={{ backgroundColor: "#F8EBDE", borderRadius: "5px" }}
            />
            <TextField
              label="Password"
              variant="outlined"
              style={{ backgroundColor: "#F8EBDE", borderRadius: "5px" }}
            />

            <Stack direction="row" style={{ justifyContent: "center" }}>
              <Button style={{ backgroundColor: "#4E8448" }} fullWidth={true}>
                <Typography style={{ color: "#F8EBDE" }}>
                  Create User
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Modal>
  );
};
