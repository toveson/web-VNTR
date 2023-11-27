"use client";

import React, { useState } from "react";
import { Stack, Tab, Tabs } from "@mui/material";
import AddGroup from "./AddGroup";
import FindGroup from "./FindGroup";
import MyGroups from "./MyGroups";

export default function Friends(): JSX.Element {
  const [tab, setTab] = useState<string>("MyGroups");

  const handleChange = (event: React.SyntheticEvent, newTab: string) => {
    setTab(newTab);
  };

  const groupData = [
    {
      name: "Amazing Group One",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos adipisci tempore atque deleniti illum molestiae inventore rerum unde, reprehenderit debitis! Ut, officia dolor? Repellat adipisci exercitationem est incidunt accusantium?",
    },
    {
      name: "Amazing Group Two",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos adipisci tempore atque deleniti illum molestiae inventore rerum unde, reprehenderit debitis! Ut, officia dolor? Repellat adipisci exercitationem est incidunt accusantium?",
    },
    {
      name: "Amazing Group Three",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos adipisci tempore atque deleniti illum molestiae inventore rerum unde, reprehenderit debitis! Ut, officia dolor? Repellat adipisci exercitationem est incidunt accusantium?",
    },
    {
      name: "Amazing Group Four",
      img: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos adipisci tempore atque deleniti illum molestiae inventore rerum unde, reprehenderit debitis! Ut, officia dolor? Repellat adipisci exercitationem est incidunt accusantium?",
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
              <Tab value="MyGroups" label="My Groups" />
              <Tab value="FindGroup" label="Find Group" />
              <Tab value="AddGroup" label="+ New Group" />
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
          {tab === "MyGroups" && <MyGroups groupData={groupData} />}
          {tab === "FindGroup" && <FindGroup groupData={groupData} />}
          {tab === "AddGroup" && <AddGroup />}
        </Stack>
      </Stack>
    </Stack>
  );
}
