import TripsInfo from './TripsInfo';
import TripDetailHeader from './TripDetailHeader';
import { Stack } from '@mui/material';
export default function TripDetailPage() {
  return (
    <Stack style={{ flexGrow: 1, background: '#F8EBDE' }}>
      <TripDetailHeader />
      <TripsInfo />;
    </Stack>
  );
}
