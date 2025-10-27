'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from '@/store/store';
import AuthLoader from '@/components/AuthLoader';
import ModalProvider from '@/providers/ModalProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ModalProvider>
                <AuthLoader />
                <Toaster position="top-right" />
                {children}
            </ModalProvider>
        </Provider>
    );
}
