import React, { PropsWithChildren, useEffect, useState } from 'react';

interface DrawerProps {
    sidebarContent: React.ReactNode;
    isOpen: boolean;
}

const Drawer: React.FC<PropsWithChildren<DrawerProps>> = ({ sidebarContent, children, isOpen }) => {
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const drawerClass = isOpen ? 'drawer lg:drawer-open' : '';

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsLargeScreen(window.innerWidth >= 1024);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={drawerClass}>
            {isLargeScreen && <div className='drawer-toggle'/>}
            {!isLargeScreen && (
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            )}
            <div className="drawer-content flex flex-col">
                {children}
            </div>
            <div className="drawer-side">
                {!isLargeScreen && (
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                )}
                <ul className="menu bg-base-100 text-base-content min-h-full w-60 p-4">
                    <a className="btn btn-ghost text-xl">UserApp</a>
                    <br />
                    {sidebarContent}
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
