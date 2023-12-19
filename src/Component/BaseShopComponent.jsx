import { Outlet } from "react-router-dom";
import HeaderShopComponent from "./Shop/HeaderShopComponent";

function BaseShopComponent() {
    return (
        <>
            <HeaderShopComponent />
            <Outlet />
        </>
    );
}

export default BaseShopComponent;
