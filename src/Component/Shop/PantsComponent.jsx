import { useEffect, useState } from "react";
import style from "../Css/Product.module.css";
import { FaShoppingCart } from "react-icons/fa";

function PantComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://625569258646add390d66a94.mockapi.io/api/products`)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setData(result);
      });
  }, []);
  const HandleOnclick = (id, color) => {
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
      {" "}
      <div className={`${style.product} m-3`}>
        <div className="container ">
          <div className="row">
            {data &&
              data.map((item, index) => [
                <div key={index} className="col-3 my-3">
                  <div className={`${style.card} card position-relative`}>
                    {Object.keys(item.checkImg).map((product) => {
                      if (item.checkImg[product]) {
                        return (
                          <img
                            props={item.linkImg[product]}
                            src={item.linkImg[product]}
                            className="card-img-top"
                            alt={item.name}
                          />
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
    </>
  );
}

export default PantComponent;
