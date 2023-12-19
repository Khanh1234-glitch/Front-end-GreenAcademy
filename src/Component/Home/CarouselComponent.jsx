import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Css/Carousel.css";

function CarouselComponent() {
    return (
        <>
            <Swiper
                style={{ zIndex: "0" }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="bg-primary w-100 position-relative">
                    <div className="my-5 " style={{ width: "383px" }}>
                        <img
                            src="https://redikick.com/wp-content/uploads/2023/10/balo-the-thao-redikick-Backpack-TechVenture-BP23001-mau-den-tach-nen.png"
                            alt=""
                        />
                        <div className="content position-absolute top-50 start-0 end-50 ">
                            <h2>BACKPACK</h2>
                            <h3>1.000.000Đ</h3>
                            <ul>
                                <li>- Sức chứa linh hoạt </li>
                                <li>
                                    - nhiều ngăn chứa đồ, ngăn lớn, ngăn đựng laptop tới 1 <span className="text-white">5.6 inch</span>
                                </li>
                                <li>
                                    - Vật liệu chống trầy xước & chống bám nước (Water-rep <span className="text-white">ellent)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-secondary py-5">
                    <div className="my-5" style={{ width: "384px", height: "100%" }}>
                        <img
                            src="//redikick.com/wp-content/uploads/2023/10/mu-the-thao-redikick-function-premium-cap-M23002-trang-tach-nen.png"
                            alt=""
                        />

                        <div className="content position-absolute bottom-50 end-0 w-50 text-white">
                            <h2>FUNCTIONAL</h2>
                            <h3>600.000Đ</h3>
                            <ul>
                                <li>
                                    <span className="text-black">- Vải Premium</span> 84C poly-spandex, nhanh khô, khả năng chống tia UV SPF 50++
                                </li>
                                <li>
                                    <span className="text-black">- Sw</span>eatband : Hút ẩm ,co giãn, kháng khuẩn với ICON Ag+
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default CarouselComponent;
