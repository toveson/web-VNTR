'use client';
import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
export default function TripDetailHeader() {
  const [value, setValue] = useState('Info');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
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
