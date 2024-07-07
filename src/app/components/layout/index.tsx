import { PropsWithChildren, useState } from 'react';
import Head from 'next/head';
import Footer from '../footer';
import Navbar from '../navbar';
import Drawer from '../drawer';

interface LayoutProps {
    title?: string;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
        console.log(isDrawerOpen);
    };

    return (
        <div className="h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Drawer sidebarContent={
                <>
                    <li><a>Dashboard</a></li>
                    <li><a>User Data</a></li>
                </>
            } isOpen={isDrawerOpen}>
                <Navbar toggleDrawer={toggleDrawer} />
                {children}
            </Drawer>
            <Footer />
        </div>
    );
};

export default Layout;