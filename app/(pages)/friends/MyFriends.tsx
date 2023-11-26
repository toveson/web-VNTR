import { Stack } from "@mui/material";
import FriendCard from "../../components/FriendCard";

export default function MyFriends() {
  const friendData = [
    {
      name: "Jacek",
      isFriend: true,
      requestSend: false,
    },
    {
      name: "CJ",
      isFriend: true,
      requestSend: false,
    },
    {
      name: "Name Here",
      isFriend: true,
      requestSend: false,
    },
  ];

  return (
    <Stack style={{ backgroundColor: "#F8EBDE", flexGrow: 1 }}>
      <Stack spacing={2} direction="row">
        {friendData.map((friend, key) => {
          return <FriendCard key={key} friendData={friend} />;
        })}
      </Stack>
    </Stack>
  );
}
