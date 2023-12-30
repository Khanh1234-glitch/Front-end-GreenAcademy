import { useEffect, useState } from "react";
import style from "../Css/Product.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
function ShockComponent() {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const fetchData = () => {
    fetch(`https://625569258646add390d66a94.mockapi.io/api/data`)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setData(result);
      });
  };
  useEffect(() => {
    if (isVisible) {
      fetchData();
    }
  }, [isVisible]);
  const handleVisibilityChange = (visible) => {
    setIsVisible(visible);
  };
  const HandleOnclick = (id, color) => {
    console.log(id, color);
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          let newCheckImg = {};
          Object.keys(item.checkImg).map((product) => {
            item.checkImg[product] = false;
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
          <div className="container my-10">
            <h4 className="my-3">
              <strong>Shock</strong>
            </h4>
            <div className=" grid grid-cols-4 gap-10">
              {data &&
                data.map((item, index) => [
                  <div key={index} className="min-w-full">
                    <div
                      className={`${style.card} card position-relative min-h-full`}
                    >
                      {Object.keys(item.checkImg).map((product) => {
                        if (item.checkImg[product]) {
                          return (
                            <Link
                              to={`/deploy-react-js/chi-tiet-san-pham-tat/${item.id}`}
                            >
                              <img
                                props={item.linkImg[product]}
                                src={item.linkImg[product]}
                                className="card-img-top"
                                alt={item.name}
                              />
                            </Link>
                          );
                        }
                      })}

                      <div className="card-body">
                        <Link
                          to={`/deploy-react-js/chi-tiet-san-pham-tat/${item.id}`}
                          className="card-text"
                        >
                          {item.name}
                        </Link>
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

export default ShockComponent;
