import { Route, Routes } from "react-router-dom";
import BaseComponent from "./Component/BaseComponent";

import HomeComponent from "./Component/Home/HomeComponent";
import BaseShopComponent from "./Component/BaseShopComponent";
import ShopComponent from "./Component/Shop/ShopComponent";
import BagComponent from "./Component/Shop/BagComponent";
import HatComponent from "./Component/Shop/HatComponent";
import ShirtComponent from "./Component/Shop/ShirtComponent";
import AccessoryComponent from "./Component/Shop/AccessoryComponent";
import ShockComponent from "./Component/Shop/ShockComponent";
import PantComponent from "./Component/Shop/PantsComponent";
import SignInComponent from "./Component/User/SignInComponent";
import RegisterComponent from "./Component/User/RegisterComponent";
import InfoComponent from "./Component/User/InfoUserComponent";
import ProductDetail from "./Component/Detail/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import BagDetail from "./Component/Detail/BagDetail";
import AccessoryDetail from "./Component/Detail/AccessoryDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="/dang-ky" element={<RegisterComponent />} />
          <Route path="/dang-nhap" element={<SignInComponent />} />
          <Route path="/thong-tin-khach-hang" element={<InfoComponent />} />
          <Route path="/chi-tiet-san-pham/:id" element={<ProductDetail />} />
          <Route path="/chi-tiet-san-pham-balo/:id" element={<BagDetail />} />
          <Route
            path="/chi-tiet-san-pham-phu-kien/:id"
            element={<AccessoryDetail />}
          />
          <Route path="/cua-hang" element={<BaseShopComponent />}>
            <Route index element={<ShopComponent />} />
            <Route path="/cua-hang/Balo" element={<BagComponent />} />
            <Route path="/cua-hang/Hat" element={<HatComponent />} />
            <Route path="/cua-hang/ao-the-thao" element={<ShirtComponent />} />
            <Route
              path="/cua-hang/phu-kien-the-thao"
              element={<AccessoryComponent />}
            />
            <Route path="/cua-hang/Quan-the-thao" element={<PantComponent />} />
            <Route path="/cua-hang/Tat" element={<ShockComponent />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
