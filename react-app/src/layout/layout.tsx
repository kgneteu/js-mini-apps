import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={'flex'}>
            <div>List</div>
            <main className={'flex flex-col p'}>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
