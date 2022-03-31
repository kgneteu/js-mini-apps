import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={'flex'}>
            <aside><h2>Menu</h2></aside>
            <main className={'flex flex-col items-center grow p-4'}>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
