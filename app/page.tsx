'use client';

import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Stack style={{ backgroundColor: '#F8EBDE', flexGrow: 1 }}>
      <Stack
        spacing={2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          alignItems: 'center',
          backgroundColor: '#F8EBDE',
          overflow: 'auto',
          padding: '0',
        }}
      >
        <Stack>
          <Stack direction="row-reverse" style={{ marginBottom: '10px' }}>
            <Link href="/api/auth/login" passHref>
              <Button
                style={{
                  backgroundColor: '#4E8448',
                }}
              >
                <a href="/api/auth/login">Log in</a>
              </Button>
            </Link>
          </Stack>
          <Card raised={true} style={{ backgroundColor: '#542F12' }}>
            <Card
              raised={true}
              style={{
                backgroundColor: '#F8EBDE',
                padding: '20px',
                margin: '40px',
                height: '60vh',
                width: '60vw',
              }}
            >
              <CardContent>
                <Typography style={{ color: '#542F12' }}>
                  Some content that is really cool stuff about the site will go
                  here.
                </Typography>
              </CardContent>
            </Card>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
}
