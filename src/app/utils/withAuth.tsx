import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getToken } from './cookies';
// import { useAuth } from '../hooks/useAuth'; // Assume useAuth provides authentication state

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const Wrapper = (props: any) => {
        const token = getToken(); 
        const router = useRouter();

        useEffect(() => {
            if (!token) {
                router.push('/login'); 
            }
        }, [token, router]);

        // Render the component only if user is authenticated
        return token ? <WrappedComponent {...props} /> : null;
    };

    return Wrapper;
};

export default withAuth;
