import { Stack } from "@mui/material";

import FriendCard from "../../components/FriendCard";

interface AddFriendProps {
  friendData: any;
}

export default function AddFriend(props: AddFriendProps) {
  const { friendData } = props;

  const handleAddFriend = (key: any) => {
    console.log(`Request Friend Clicked ${key}`);
  };

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
      {friendData.map((friend: AddFriendProps, key: any) => {
        return (
          <FriendCard
            key={key}
            friendData={friend}
            showButton={true}
            buttonText="add friend"
            handleButtonClick={() => handleAddFriend(key)}
          />
        );
      })}
    </Stack>
  </Stack>
  );
}