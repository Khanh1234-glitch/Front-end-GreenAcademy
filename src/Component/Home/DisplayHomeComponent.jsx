import ProductComponent from "./ProductComponent";
import style from "../Css/Product.module.css";
import { Link } from "react-router-dom";
function DisplayComponent() {
  return (
    <>
      <h4 className="mt-5">
        <strong style={{ fontSize: "36px" }}>Featured Products</strong>
      </h4>
      <ProductComponent />
      <div className={`${style.btn} w-100 text-center my-5`}>
        <Link
          to="/cua-hang"
          className={`${style.btnLink} text-uppercase p-3  border boder-0`}
        >
          Tất cả sản phẩm
        </Link>
      </div>
    </>
  );
}

export default DisplayComponent;
