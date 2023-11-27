"use client";

import React, { useState } from "react";
import { Stack, Tab, Tabs } from "@mui/material";
import AddFriend from "./AddFriend";
import FriendRequests from "./FriendRequests";
import MyFriends from "./MyFriends";

export default function Friends(): JSX.Element {
  const [tab, setTab] = useState<string>("MyFriends");

  const handleChange = (event: React.SyntheticEvent, newTab: string) => {
    setTab(newTab);
  };

  const friendData = [
    {
      name: "Jacek",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
    {
      name: "CJ",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
    {
      name: "Name Here",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
    {
      name: "Jacek",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
    {
      name: "CJ",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
    {
      name: "Name Here",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
    {
      name: "Jacek",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
    {
      name: "CJ",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    },
  ];

  return (
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
          <Stack direction="row" spacing={2}>
            <Tabs
              value={tab || "Friend Request"}
              onChange={handleChange}
              centered
            >
              <Tab value="MyFriends" label="MyFriends" />
              <Tab value="FriendRequest" label="Friend Request" />
              <Tab value="NewFriend" label="+ New Friend" />
            </Tabs>
          </Stack>
        </Stack>
        <Stack
          spacing={2}
          style={{
            marginTop: "30px",
            alignItems: "center",
          }}
        >
          {tab === "MyFriends" && <MyFriends friendData={friendData} />}
          {tab === "FriendRequest" && (
            <FriendRequests friendData={friendData} />
          )}
          {tab === "NewFriend" && <AddFriend friendData={friendData} />}
        </Stack>
      </Stack>
    </Stack>
  );
}
