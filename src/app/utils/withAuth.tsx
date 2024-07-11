import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getToken } from './cookies';
import { Routes } from '../routes/routes';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const Wrapper = (props: any) => {
        const token = getToken(); 
        const router = useRouter();

        useEffect(() => {
            if (!token) {
                router.push(Routes.LOGIN);
            }
        }, [token]);

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default withAuth;
