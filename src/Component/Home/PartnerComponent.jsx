import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function PartnerComponent() {
    const img = [
        {
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTiX_-2FcrsmurjeG3CbeRvbKvIsEg9JNz20kBLNUtYyN-X5igi",
        },
        {
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToi9eja9iU-vZHaqf1NTCGsaCG_d5rr8jKEkr4IR5YC-G75e6A",
        },
        {
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcNH65-AMVDSTECy4Dr-vQrQ4J1WGf9nGy_7eNlfIvJ4zsrdm7",
        },
        {
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfEhTGH9BdoI93DkmxJqWnbBpm0XCJ4fLIhcJl4VJ8jeGw_9iX",
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpNoGqZWTNuOkRUsihDSFwh6n8uXOsaOhCg46_hdJiCAnSj3tc",
        },
        {
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRiCsaCLeIKe3FokdiL8UHmFuyFExKQxnahTQOBJL8SQWjQYM5",
        },
        {
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLPoGeZgORUqI7jotn5u0LnTwRs1_drPN3DWOhGk424X4SbNgZ",
        },
        {
            img: " https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcReXG1duCO0YSBHkpbaTgYK83Jz2XfHQ9G-6WL0YxpeCPAN8tAR",
        },
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,

        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
    };
    return (
        <>
            <div className="container">
                <h4 className="text-center my-5 " style={{ fontSize: "36px" }}>
                    <strong>Partners & Friends</strong>
                </h4>
                <Slider {...settings} className="my-5">
                    {img.map((item, key) => [
                        <div key={key} className="w-75">
                            <img src={item.img} alt="" />
                        </div>,
                    ])}
                </Slider>
            </div>
        </>
    );
}

export default PartnerComponent;
