import { Stack, Typography, Button } from '@mui/material';
import { Trip } from './TripsWrapper';
import Link from 'next/link';

interface TripsInterface {
  trips: Trip[];
}

export default function TripsView({ trips }: TripsInterface) {
  return (
    <>
      <Stack style={{ paddingTop: '15px', alignItems: 'end' }}>
        <Button
          style={{
            backgroundColor: '#4E8448',
            color: '#F8EBDE',
            width: '150px',
          }}
        >
          <Typography style={{ color: '#F8EBDE' }}>+ New Trip</Typography>
        </Button>
      </Stack>

      <Stack
        style={{
          flexDirection: 'column',

          alignItems: 'center',
        }}
      >
        {trips.map((trip) => (
          <Button
            style={{
              backgroundColor: '#4E8448',
              color: '#F8EBDE',
              margin: '5px',
            }}
            key={trip.name + trip.date}
          >
            <Link
              style={{
                color: '#F8EBDE',
              }}
              href={`/trips/${trip.id}`}
            >
              {trip.name} {trip.date}
            </Link>
          </Button>
        ))}
      </Stack>
    </>
  );
}
