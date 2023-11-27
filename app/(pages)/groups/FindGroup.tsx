import { Stack } from "@mui/material";
import GroupCard from "@/app/components/GroupCard";

interface FindGroupProps {
  groupData: any;
}

export default function FindGroup(props: FindGroupProps) {
  const { groupData } = props;

  const handleGroupRequest = (key: any) => {
    console.log(`Group Request Clicked! ${key}`);
  };

  return (
    <Stack
      direction="row"
      style={{
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {groupData.map((group: FindGroupProps, key: number) => {
        return (
          <GroupCard
            key={key}
            buttonText="join group"
            groupData={group}
            handleButtonClick={() => handleGroupRequest(key)}
          />
        );
      })}
    </Stack>
  );
}
