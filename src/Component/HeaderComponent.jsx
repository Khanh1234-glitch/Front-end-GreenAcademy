import Headroom from "react-headroom";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import style from "../Component/Css/Header.module.css";
import CarouselComponent from "./Home/CarouselComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function HeaderComponent(props) {
  console.log(localStorage);
  const [user, setUser] = useState("");
  const name = localStorage.getItem("nameUser");
  console.log(localStorage);
  useEffect(() => {
    if (localStorage.length == 0) {
      console.log("chưa có tài khoản");
    } else {
      console.log("đã có tài khoản");
    }
  }, []);

  return (
    <>
      <Headroom>
        <header className={`${style.header} bg-white p-2`}>
          <div className="container text-center text-black  ">
            <div className="row ">
              <div className="col">
                <div className="logo " style={{ width: "50%" }}>
                  <img
                    src="https://redikick.com/wp-content/uploads/2021/08/logo-redikick-web.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col text-black">
                <div className="menu">
                  <ul className="d-flex justify-content-between align-item-center my-2 text-black">
                    <li className={`${style.hover}`}>
                      <Link to="/">HOME</Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to="/cua-hang" name={props.name}>
                        SHOP
                      </Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to={"/cua-hang/Tat"}>TẤT</Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to={"/cua-hang/Quan-the-thao"}>QUẦN</Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to="/cua-hang/ao-the-thao">ÁO</Link>
                    </li>
                    <li className={`${style.hover}`}>
                      <Link to="/cua-hang/phu-kien-the-thao">PHỤ KIỆN</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className={style.login}>
                  <ul
                    className=" d-flex justify-content-content my-2"
                    style={{ gap: "20px" }}
                  >
                    <li>
                      {name ? (
                        <Link to={"/thong-tin-khach-hang"}>
                          Welcome, {name}
                        </Link>
                      ) : (
                        <Link to={"/dang-nhap"}>LOGIN / REGISTER</Link>
                      )}
                    </li>
                    <li>
                      <a href="#">
                        <FaMagnifyingGlass />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaRegHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                        <span>0 / 0₫</span>
                      </a>
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
