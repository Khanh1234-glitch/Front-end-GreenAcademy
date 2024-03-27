import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../Css/Product.module.css";
import SpinnerComponent from "../SpinnerComponent";
import { AppContext } from "../AppContext/AppContext";

function BagDetail() {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [colors, setColors] = useState([0]);
  const { handleAddToCart } = useContext(AppContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://6565f442eb8bb4b70ef2aae2.mockapi.io/api/spbussiness/Bag/${id}`,
    )
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }, [data.id]);
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
      <div>
        {" "}
        <div className="container-md mb-5 mt-5">
          <div className="row">
            {Object.keys(data).length === 0 ? (
              <SpinnerComponent />
            ) : (
              <>
                <div className="col-6">
                  <img
                    src={data && data.linkImg && data.linkImg.black}
                    alt=""
                  />
                </div>
                <div className="col-6 rounded-md p-5 shadow-xl">
                  <div className="summary-inner">
                    <h1 className="mb-5 text-4xl">{data.name}</h1>
                    <span className="mr-3 text-3xl text-zinc-500 line-through">
                      {data.price}
                    </span>
                    <span className="text-3xl text-red-600">
                      {data.priceSale}
                    </span>

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
                        {data.color && data.color.length > 0 ? (
                          data.color.map((color, key) => (
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
                              onClick={() => HandleOnclick(data.id, color)}
                            ></span>
                          ))
                        ) : (
                          <p>Không có màu sắc</p>
                        )}
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-4">
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
                        <button
                          onClick={() => handleAddToCart(data, quantity)}
                          className="bg-red-700 text-gray-50"
                        >
                          Thêm giỏ hàng
                        </button>
                      </div>
                      <div className="col-4">
                        <Link to={`/deploy-react-js/gio-hang-thanh-toan`}>
                          <button className="bg-red-700 text-gray-50">
                            Mua ngay
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BagDetail;
