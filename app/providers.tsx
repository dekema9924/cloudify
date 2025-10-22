'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from '@/store/store';
import AuthLoader from '@/components/AuthLoader';

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <AuthLoader />
            <Toaster position="top-right" />
            {children}
        </Provider>
    );
}
