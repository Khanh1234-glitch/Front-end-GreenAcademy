import { Link } from "react-router-dom";
import style from "../Css/HeaderShop.module.css";

function HeaderShopComponent() {
  return (
    <>
      <header>
        <div className={style.img}>
          <div className="container">
            <div className="menu">
              <ul
                className="d-flex  justify-content-center align-item-center"
                style={{ gap: "25px", padding: "100px" }}
              >
                <li>
                  <Link to="/cua-hang/Balo">Balo</Link>
                </li>
                <li>
                  <Link to="/cua-hang/Hat">Mũ</Link>
                </li>
                <li>
                  <Link to="/cua-hang/ao-the-thao">Áo thể thao</Link>
                </li>
                <li>
                  <Link to="/cua-hang/phu-kien-the-thao">
                    Phụ kiện thể thao
                  </Link>
                </li>
                <li>
                  <Link to={"/cua-hang/Quan-the-thao"}>Quần</Link>
                </li>
                <li>
                  <Link to={"/cua-hang/Tat"}>Tất thể thao</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="shop-loop border-bottom my-5 pb-3">
          <div className="row">
            <div className="col-10">
              <Link to={"/"}>Trang chủ</Link>
              <span>/ </span>
            </div>
            <div className="col-2">Hiển thị 1–20 của 45 kết quả</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderShopComponent;
