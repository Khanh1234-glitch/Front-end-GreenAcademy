import ProductComponent from "../Home/ProductComponent";
import BagComponent from "./BagComponent";

import ShirtComponent from "./ShirtComponent";
import AccessoryComponent from "./AccessoryComponent";
import ShockComponent from "./ShockComponent";
import PantComponent from "./PantsComponent";
const Dataproduct = [
  {
    id: 1,
    name: "Áo Hoodie Redikick Signature",
    price: "530.000₫",
    priceSale: "439.000₫",
    sale: "-17%",
    status: "NEW",

    color: ["black", "#333300", "#AEAEB0"],
    checkImg: {
      black: true,
      "#333300": false,
      "#AEAEB0": false,
    },
    linkImg: {
      black:
        "https://redikick.com/wp-content/uploads/2023/08/R365-xanh-mint-avt-430x430.png",
      "#333300":
        "https://redikick.com/wp-content/uploads/2023/11/Redikick-Signature-Hoodie-A23024-xam-chi-430x430.jpg",
      "#AEAEB0":
        "https://redikick.com/wp-content/uploads/2023/11/Redikick-Signature-Hoodie-A23024-avatar-2-430x430.jpg",
    },
    img: {
      img: "https://redikick.com/wp-content/uploads/2023/08/R365-xanh-mint-avt-430x430.png",
    },
  },
];
function ProductShopComponent() {
  console.log(Dataproduct.linkImg);
  return (
    <>
      <ProductComponent />
      <ShirtComponent />
      <AccessoryComponent />
      <ShockComponent />
      <PantComponent />
    </>
  );
}

export default ProductShopComponent;
