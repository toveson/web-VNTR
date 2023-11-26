import { Stack } from "@mui/material";
import FriendCard from "../../components/FriendCard";

interface MyFriendsProps {
  friendData: any;
}

export default function MyFriends(props: MyFriendsProps) {
  const { friendData } = props;


  return (
    <Stack style={{ backgroundColor: "#F8EBDE", flexGrow: 1 }}>
      <Stack
        direction="row"
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          width: "70%",
          margin: "0 auto",
        }}
      >
        {friendData.map((friend: MyFriendsProps, key: any) => {
          return <FriendCard key={key} friendData={friend} />;
        })}
      </Stack>
    </Stack>
  );
}
