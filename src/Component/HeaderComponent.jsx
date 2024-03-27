import Headroom from "react-headroom";

import { FaShoppingCart } from "react-icons/fa";
import style from "../Component/Css/Header.module.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext/AppContext";
import { useAuth } from "./AppContext/AuthContext";
function HeaderComponent(props) {
  const { user, logout } = useAuth();
  // const [user, setUser] = useState("");
  const name = localStorage.getItem("nameUser");
  const { cartSubTotal } = useContext(AppContext);
  const formatCurrency = (value) => {
    return value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  console.log(user);
  const cartCountLocal = JSON.parse(localStorage.getItem("cartCount"));
  return (
    <>
      <Headroom>
        <header className={`${style.header} bg-white p-2`}>
          <div className="container text-center text-black  ">
            <div className="row ">
              <div className={`col `}>
                <div
                  className="logo d-flex justify-content-center"
                  style={{ width: "50%" }}
                >
                  <Link
                    className="d-flex justify-content-center"
                    to={"/deploy-react-js/"}
                  >
                    <img
                      src="https://redikick.com/wp-content/uploads/2021/08/logo-redikick-web.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col my-2 text-black">
                <div className={style.menu}>
                  <ul
                    className={`d-flex justify-content-between align-item-center my-2 text-black  `}
                  >
                    <li className={`${style.hover}`}>
                      <Link to="/deploy-react-js">HOME</Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to="/deploy-react-js/cua-hang" name={props.name}>
                        SHOP
                      </Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to={"/deploy-react-js/cua-hang/Tat"}>TẤT</Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to={"/deploy-react-js/cua-hang/Quan-the-thao"}>
                        QUẦN
                      </Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to="/deploy-react-js/cua-hang/ao-the-thao">ÁO</Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to="/deploy-react-js/cua-hang/phu-kien-the-thao">
                        PHỤ KIỆN
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col my-2">
                <div className={style.login}>
                  <ul
                    className=" d-flex justify-content-content my-2"
                    style={{ gap: "20px" }}
                  >
                    <li>
                      {user && user.fullName ? (
                        <Link to={"/deploy-react-js/thong-tin-khach-hang"}>
                          Welcome, {user.fullName}
                        </Link>
                      ) : (
                        <Link to={"/deploy-react-js/dang-nhap"}>
                          LOGIN / REGISTER
                        </Link>
                      )}
                    </li>

                    <li className="w-25 ">
                      <Link
                        className="d-flex "
                        to={`/deploy-react-js/gio-hang-thanh-toan`}
                      >
                        <FaShoppingCart className="me-2" />
                        <span>
                          {cartCountLocal} /
                          {cartSubTotal == 0
                            ? "0₫"
                            : formatCurrency(cartSubTotal)}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Headroom>
    </>
  );
}

export default HeaderComponent;
