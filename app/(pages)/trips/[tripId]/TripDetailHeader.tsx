import { Tabs, Tab } from '@mui/material';

interface TripDetailHeaderProps {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function TripDetailHeader({
  tab,
  setTab,
}: TripDetailHeaderProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Tabs
      value={tab}
      onChange={handleChange}
      textColor="primary"
      indicatorColor="primary"
      centered
    >
      <Tab value="Back" label="Back" />
      <Tab value="Info" label="Info" />
      <Tab value="Shopping" label="Shopping List" />
      <Tab value="Packing" label="Packing List" />
      <Tab value="Chat" label="Chat" />
    </Tabs>
  );
}
