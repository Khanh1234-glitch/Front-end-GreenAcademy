import { useEffect, useState } from "react";
import style from "../Css/Product.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
function AccessoryComponent() {
  const [data, setData] = useState([]);
  const [isVisble, setIsVisible] = useState(false);

  const fetchData = () => {
    fetch(
      `https://6561f5d0dcd355c083246743.mockapi.io/api/spbussiness/accessory`,
    )
      .then((data) => data.json())
      .then((result) => {
        setData(result);
      });
  };
  useEffect(() => {
    if (isVisble) {
      fetchData();
    }
  }, [isVisble]);
  const handleVisibilityChange = (visible) => {
    setIsVisible(visible);
  };
  const HandleOnclick = (id, color) => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          let newCheckImg = {};
          Object.keys(item.checkImg).map((data) => {
            item.checkImg[data] = false;
            newCheckImg = { ...item.checkImg, [color]: true };
            return null;
          });
          return { ...item, checkImg: newCheckImg };
        } else {
          return item;
        }
      });
    });
  };
  return (
    <>
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div className={`${style.product} `}>
          <div className=" container">
            <h4 className="my-3">
              <strong>Accessory</strong>
            </h4>
            <div className="   grid  grid-cols-4 gap-10  ">
              {data &&
                data.map((item, index) => [
                  <div key={index} className="h-full w-full">
                    <div
                      className={`${style.card}  card position-relative min-h-full w-full`}
                    >
                      {Object.keys(item.checkImg).map((data) => {
                        if (item.checkImg[data]) {
                          return (
                            <Link to={`/chi-tiet-san-pham-phu-kien/${item.id}`}>
                              <img
                                props={item.linkImg[data]}
                                src={item.linkImg[data]}
                                className="card-img-top"
                                alt={item.name}
                              />
                            </Link>
                          );
                        }
                      })}

                      <div className="card-body">
                        <p className="card-text">{item.name}</p>
                        <div className={style.color}>
                          {item.color &&
                            item.color.map((color, key) => (
                              <div key={key}>
                                <span
                                  className={`${item.checkImg[color]} && ${
                                    item.checkImg[color] === true
                                      ? style.active
                                      : ""
                                  } `}
                                  onClick={() => HandleOnclick(item.id, color)}
                                  key={key}
                                  style={{
                                    backgroundColor: color,
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "100%",
                                  }}
                                ></span>
                              </div>
                            ))}
                        </div>
                        <div className={style.price}>
                          <p>
                            <span>{item.price}</span>
                            {item.priceSale}
                          </p>
                        </div>
                        <div
                          className={`${style.productLabel} position-absolute `}
                        >
                          <p>{item.sale}</p>
                          <p>{item.status}</p>
                        </div>
                        <div className={`${style.shopping} position-absolute`}>
                          <FaShoppingCart />
                        </div>
                      </div>
                    </div>
                  </div>,
                ])}
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </>
  );
}

export default AccessoryComponent;
