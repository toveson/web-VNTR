'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Stack } from '@mui/material';

export default function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error.message</div>;
  console.log(user);
  return (
    user && (
      <Stack style={{ backgroundColor: '#F8EBDE', flexGrow: 1 }}>
        Hello {user.name}
        <a href="/api/auth/logout">Logout</a>
      </Stack>
    )
  );
}
