'use client';
import { useState } from 'react';
import { Stack } from '@mui/material';

import {
  Chat,
  TripsInfo,
  TripDetailHeader,
  ShoppingList,
  PackingList,
} from './index';
import { Shop } from '@mui/icons-material';

const renderTripDetail = (page: string) => {
  switch (page) {
    case 'Info':
      return <TripsInfo />;

    case 'Shopping':
      return <ShoppingList />;

    case 'Packing':
      return <PackingList />;

    case 'Chat':
      return <Chat />;
  }
};

export default function TripDetailPage() {
  const [tab, setTab] = useState<string>('Info');

  return (
    <Stack style={{ flexGrow: 1, background: '#F8EBDE' }}>
      <TripDetailHeader tab={tab} setTab={setTab} />
      {renderTripDetail(tab)}
    </Stack>
  );
}
