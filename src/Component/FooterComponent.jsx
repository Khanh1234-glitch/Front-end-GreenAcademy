import style from "../Component/Css/Footer.module.css";
function FooterComponent() {
    return (
        <>
            <footer className={`${style.footer}`}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <div className="logo w-50">
                                <img src="https://redikick.com/wp-content/uploads/2021/08/logo-redikick-web.png" alt="" />
                            </div>
                            <div className="content my-2">
                                <h5>
                                    <strong>CÔNG TY TNHH RED HP</strong>
                                </h5>
                                <ul className="my-5 p-0">
                                    <li>Trụ sở: số 5 ngõ 424 Đường Láng, P. Láng Hạ, Q. Đống Đa, TP. Hà Nội</li>
                                    <li>Phone: 0912.724.920 </li>
                                    <li>contact@red-hp.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h5>VỀ REDIKICK</h5>
                            <ul className="my-5 p-0">
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Wishlist</a>
                                </li>
                                <li>
                                    <a href="#">Compare</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>CHÍNH SÁCH</h5>
                            <ul className="my-5 p-0">
                                <li>
                                    <a href="#">Chính sách bảo mật</a>
                                </li>
                                <li>
                                    <a href="#">Điều Khoản & Điều Kiện Chung</a>
                                </li>
                                <li>
                                    <a href="#">Giao hàng & vận chuyển</a>
                                </li>
                                <li>
                                    <a href="#">Đổi trả & Bảo hành</a>
                                </li>
                                <li>
                                    <a href="#">Chính sách Thanh Toán</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;
