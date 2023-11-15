'use client';

import { getTripById } from '../utils';
import { Stack, Typography, Paper } from '@mui/material';
import { useParams } from 'next/navigation';

export default function TripsInfo() {
  const { tripId } = useParams();
  const { name, date, info, group_info } = getTripById(Number(tripId));

  return (
    <Stack
      style={{
        paddingTop: '15px',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <Paper
        elevation={12}
        style={{
          background: '#542F12',
          padding: '20px',
          margin: '12px',
          width: '50vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography style={{ color: '#F8EBDE' }}>{name}</Typography>
      </Paper>
      <Paper
        elevation={12}
        style={{
          background: '#542F12',
          padding: '20px',
          margin: '12px',
          width: '75vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography style={{ color: '#F8EBDE' }}>{info}</Typography>
      </Paper>
      <Paper
        elevation={12}
        style={{
          background: '#542F12',
          padding: '20px',
          margin: '12px',
          width: '75vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography style={{ color: '#F8EBDE' }}>{date}</Typography>
      </Paper>

      <div style={{ display: 'flex', width: '75vw', gap: '10px' }}>
        <Paper
          elevation={12}
          style={{
            width: '100%',
            background: '#542F12',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F8EBDE',
          }}
        >
          <Typography style={{ padding: '10px' }} fontSize={20}>
            Who is going
          </Typography>
          {group_info.map((friend) => (
            <Typography style={{ color: '#F8EBDE' }} key={friend}>
              {friend}
            </Typography>
          ))}
        </Paper>

        <Paper
          elevation={12}
          style={{
            width: '100%',
            background: '#542F12',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F8EBDE',
          }}
        >
          <Typography style={{ padding: '10px' }} fontSize={20}>
            Countdown!
          </Typography>
        </Paper>
      </div>
    </Stack>
  );
}
