'use client';

import useAuthLoader from '@/hooks/useAuthLoader';

export default function AuthLoader() {
    useAuthLoader();
    return null;
}
