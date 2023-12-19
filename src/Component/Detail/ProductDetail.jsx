import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../Css/Product.module.css";
function ProductDetail() {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [colors, setColors] = useState([0]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://6565f442eb8bb4b70ef2aae2.mockapi.io/api/spbussiness/data/${id}`,
    )
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setData(result);
        console.log(result.color);
      });
  }, []);

  const handleDecrease = () => {
    setQuantity((prevCount) => prevCount - 1);
  };
  const handleIncrease = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  const HandleOnclick = (id, color) => {
    console.log("success");
  };

  return (
    <>
      <div className="container-md mb-5 mt-5">
        <div className="row">
          <div className="col-6">
            <img
              src="https://redikick.com/wp-content/uploads/2023/11/Redikick-Signature-Hoodie-A23024-avatar-4-430x430.jpg"
              alt=""
            />
          </div>
          <div className="col-6 rounded-md p-5 shadow-xl">
            <div className="summary-inner">
              <h1 className="mb-5 text-4xl">{data.name}</h1>
              <span className="mr-3 text-3xl text-zinc-500 line-through">
                {data.price}
              </span>
              <span className="text-3xl text-red-600">{data.priceSale}</span>

              <div className="mt-5 p-3 outline-dashed outline-2 outline-offset-2">
                <p>
                  Thêm <span>450.000₫</span> để được miễn phí vận chuyển
                </p>
              </div>

              <div className="color mt-5">
                <p>
                  <strong>Màu:</strong>
                </p>
                <div className={style.color}>
                  {data.color &&
                    data.color.map((color, key) => (
                      <>
                        <span
                          key={key}
                          className={colors === color ? style.active : ""}
                          style={{
                            backgroundColor: color,
                            width: "20px",
                            height: "20px",
                            margin: "10px",
                            borderRadius: "100%",
                          }}
                          onClick={() => HandleOnclick(data.id, data.color)}
                        ></span>
                      </>
                    ))}
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-4">
                  {" "}
                  <div className="input-group">
                    <button
                      type="button"
                      onClick={handleDecrease}
                      className="input-group-text"
                    >
                      -
                    </button>
                    <p className="form-control text-center">{quantity}</p>
                    <button
                      type="button"
                      onClick={handleIncrease}
                      className="input-group-text"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <button className="bg-red-700 text-gray-50">
                    Thêm giỏ hàng
                  </button>
                </div>
                <div className="col-4">
                  <button className="bg-red-700 text-gray-50">Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
