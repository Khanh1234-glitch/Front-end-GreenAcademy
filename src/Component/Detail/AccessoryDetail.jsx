import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../Css/Product.module.css";
function AccessoryDetail() {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://6561f5d0dcd355c083246743.mockapi.io/api/spbussiness/accessory/${id}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        // Set màu và hình ảnh mặc định
        setSelectedColor(result.color[0]);
        setCurrentImage(result.linkImg[result.color[0]]);
        console.log(result);
      });
  }, [id]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const HandleOnclick = (color) => {
    setSelectedColor(color);
    setCurrentImage(data.linkImg[color]);
  };
  return (
    <>
      <div className="container-md mb-5 mt-5">
        <div className="row">
          <div className="col-6">
            <img src={currentImage} alt="" />
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
                    data.linkImg &&
                    data.color.map((color, key) => (
                      <span
                        key={key}
                        className={selectedColor === color ? style.active : ""}
                        style={{
                          backgroundColor: color,
                          width: "20px",
                          height: "20px",
                          margin: "10px",
                          borderRadius: "100%",
                        }}
                        onClick={() => HandleOnclick(color)}
                      ></span>
                    ))}
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

export default AccessoryDetail;
