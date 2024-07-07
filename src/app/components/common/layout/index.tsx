import { PropsWithChildren, useState } from 'react';
import Head from 'next/head';
import Footer from '../footer';
import Navbar from '../navbar';
import Drawer from '../drawer';
import Link from 'next/link';

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
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/apps/users">User Data</Link></li>
                </>
            } isOpen={isDrawerOpen}>
                <Navbar toggleDrawer={toggleDrawer} />
                <div className="p-6 min-h-standard bg-base-200">
                    <div className="flex flex-col gap-4">
                        <div className="col-span-1 xl:col-span-9">
                            <h3 className="text-lg font-medium">{title}</h3>
                        </div>
                        {children}

                    </div>
                </div>
            </Drawer>
            <Footer />
        </div>
    );
};

export default Layout;