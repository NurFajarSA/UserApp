import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth'; // Assume useAuth provides authentication state

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const Wrapper = (props: any) => {
        const user = true; 
        const loading = true;
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/login'); 
            }
        }, [loading, user, router]);

        // Render the component only if user is authenticated
        return user ? <WrappedComponent {...props} /> : null;
    };

    return Wrapper;
};

export default withAuth;
