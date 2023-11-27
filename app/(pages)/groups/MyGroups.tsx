import { Stack } from "@mui/material";
import GroupCard from "@/app/components/GroupCard";

interface MyGroupProps {
  groupData: any;
}

export default function MyGroups(props: MyGroupProps) {
  const { groupData } = props;

  const handleViewGroup = (key: any) => {
    console.log(`View Group Clicked! ${key}`);
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
      {groupData.map((group: MyGroupProps, key: number) => {
        return (
          <GroupCard
            key={key}
            buttonText="view group"
            groupData={group}
            handleButtonClick={() => handleViewGroup(key)}
          />
        );
      })}
    </Stack>
  );
}
