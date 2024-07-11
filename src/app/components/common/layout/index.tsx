import { PropsWithChildren, useState } from 'react';
import Head from 'next/head';
import Footer from '../footer';
import Navbar from '../navbar';
import Drawer from '../drawer';
import Link from 'next/link';
import { getUserRole } from '@/app/utils/cookies';
import { Role } from '@/app/models/role';

interface LayoutProps {
    title?: string;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const role = getUserRole();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
            </Head>
            <Drawer sidebarContent={
                <>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    {role === Role.ADMIN && <li><Link href="/apps/users">Data Pengguna</Link></li>}
                </>
            } isOpen={isDrawerOpen}>
                <Navbar toggleDrawer={toggleDrawer} />
                <div className="p-6 min-h-standard bg-base-200">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between">
                            <div className="col-span-1 xl:col-span-9">
                                <h3 className="text-lg font-medium">{title}</h3>
                            </div>
                            <div className="breadcrumbs text-sm">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    {title === "Dashboard" || title === "Profile" ? null : <li><Link href="/dashboard">Dashboard</Link></li>}
                                    {title === "Data Pengguna" || title === "Dashboard" || title === "Profile" ? null : <li><Link href="/apps/users">Data Pengguna</Link></li>}
                                    <li>{title}</li>
                                </ul>
                            </div>
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