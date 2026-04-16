
import { Outlet } from 'react-router';

import Footer from '../component/Footer/Footer';
import NavBar from '../component/NavBar/NavBar';

const rootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default rootLayout;