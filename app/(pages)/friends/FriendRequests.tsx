import { Stack } from "@mui/material";
import FriendCard from "../../components/FriendCard";

interface FriendRequestsProps {
  friendData: any;
}

export default function FriendRequests(props: FriendRequestsProps) {
  const { friendData } = props;

  const handleFriendRequest = (key: any) => {
    console.log(`Request Approved Clicked ${key}`);
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
        {friendData.map((friend: FriendRequestsProps, key: any) => {
          return (
            <FriendCard
              key={key}
              friendData={friend}
              showButton={true}
              buttonText="accept friend"
              handleButtonClick={() => handleFriendRequest(key)}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
