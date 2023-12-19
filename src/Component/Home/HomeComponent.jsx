import CarouselComponent from "./CarouselComponent";
import DisplayComponent from "./DisplayHomeComponent";
import EliteGroupComponent from "./EliteGroupComponent";
import PartnerComponent from "./PartnerComponent";
import ProductComponent from "./ProductComponent";

function HomeComponent() {
    return (
        <>
            <CarouselComponent />
            <DisplayComponent />
            <EliteGroupComponent />
            <PartnerComponent />
        </>
    );
}

export default HomeComponent;
