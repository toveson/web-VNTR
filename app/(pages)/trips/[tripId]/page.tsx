'use client';
import {useState} from 'react';
import {Stack} from '@mui/material';

import { useRouter } from 'next/navigation'

import {
    Chat,
    TripsInfo,
    TripDetailHeader,
    ShoppingList,
    PackingList,
} from './index';

const renderTripDetail = (page: string, router: any) => {

    switch (page) {
        case 'Info':
            return <TripsInfo/>;

        case 'Shopping':
            return <ShoppingList/>;

        case 'Packing':
            return <PackingList/>;

        case 'Chat':
            return <Chat/>;

        case 'Back':

            router.push('/trips');
            return null;

        default:
            return null;

    }
};

export default function TripDetailPage() {
    const router = useRouter();
    const [tab, setTab] = useState<string>('Info');

    return (
        <Stack style={{flexGrow: 1, background: '#F8EBDE'}}>
            <TripDetailHeader tab={tab} setTab={setTab}/>
            {renderTripDetail(tab, router)}
        </Stack>
    );
}
