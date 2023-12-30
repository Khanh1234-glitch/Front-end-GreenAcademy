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
import PantDetail from "./Component/Detail/PantsDetail";
import ShockDetail from "./Component/Detail/ShockDetail";
import CartComponent from "./Component/CartComponent/CartComponent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/deploy-react-js/" element={<BaseComponent />}>
          <Route index element={<HomeComponent />} />
          <Route
            path="/deploy-react-js/dang-ky"
            element={<RegisterComponent />}
          />
          <Route
            path="/deploy-react-js/dang-nhap"
            element={<SignInComponent />}
          />
          <Route
            path="/deploy-react-js/gio-hang-thanh-toan"
            element={<CartComponent />}
          />
          <Route
            path="/deploy-react-js/thong-tin-khach-hang"
            element={<InfoComponent />}
          />
          <Route
            path="/deploy-react-js/chi-tiet-san-pham/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/deploy-react-js/chi-tiet-san-pham-balo/:id"
            element={<BagDetail />}
          />
          <Route
            path="/deploy-react-js/chi-tiet-san-pham-quan/:id"
            element={<PantDetail />}
          />
          <Route
            path="/deploy-react-js/chi-tiet-san-pham-tat/:id"
            element={<ShockDetail />}
          />
          <Route
            path="/deploy-react-js/chi-tiet-san-pham-phu-kien/:id"
            element={<AccessoryDetail />}
          />
          <Route
            path="/deploy-react-js/cua-hang"
            element={<BaseShopComponent />}
          >
            <Route index element={<ShopComponent />} />
            <Route
              path="/deploy-react-js/cua-hang/Balo"
              element={<BagComponent />}
            />
            <Route
              path="/deploy-react-js/cua-hang/Hat"
              element={<HatComponent />}
            />
            <Route
              path="/deploy-react-js/cua-hang/ao-the-thao"
              element={<ShirtComponent />}
            />
            <Route
              path="/deploy-react-js/cua-hang/phu-kien-the-thao"
              element={<AccessoryComponent />}
            />
            <Route
              path="/deploy-react-js/cua-hang/Quan-the-thao"
              element={<PantComponent />}
            />
            <Route
              path="/deploy-react-js/cua-hang/Tat"
              element={<ShockComponent />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
