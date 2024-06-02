import { Outlet } from "react-router-dom";
import Header from "../Components/Ui/Header/Header";


const Root = () => {
    return (
        <div className="max-w-7xl">
            <Header/>
            <Outlet />
        </div>
    );
};

export default Root;