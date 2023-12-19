import ProductComponent from "../Home/ProductComponent";
import BagComponent from "./BagComponent";

import ShirtComponent from "./ShirtComponent";
import AccessoryComponent from "./AccessoryComponent";
import ShockComponent from "./ShockComponent";
import PantComponent from "./PantsComponent";

function ProductShopComponent() {
  return (
    <>
      <ProductComponent />
      {/* <ShirtComponent /> */}
      {/* <AccessoryComponent /> */}
      {/* <ShockComponent /> */}
      <PantComponent />
    </>
  );
}

export default ProductShopComponent;
