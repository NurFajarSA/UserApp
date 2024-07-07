import React, { PropsWithChildren } from 'react';

interface DrawerProps {
    sidebarContent: React.ReactNode;
    isOpen?: boolean;
}

const Drawer: React.FC<PropsWithChildren<DrawerProps>> = ({ sidebarContent, children, isOpen }) => {
    const drawerClass = isOpen ? 'drawer lg:drawer-open' : '';
    return (
        <div className={drawerClass}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle hidden md:block" />
            <div className="drawer-content flex flex-col">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
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
