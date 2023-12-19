import { FaFacebookF } from "react-icons/fa";
import style from "../Css/EliteGroup.module.css";
function EliteGroupComponent() {
    return (
        <>
            <div className={`${style.container} container position-relative`}>
                <img src="https://redikick.com/wp-content/uploads/2021/05/redikick-elite-group-1024x512.png" alt="" />
                <div className={`${style.btn} w-100 text-center`}>
                    <button className={` position-absolute    border border-0 rounded-pill p-2`}>
                        <FaFacebookF />
                        Tham gia
                    </button>
                </div>
            </div>
        </>
    );
}

export default EliteGroupComponent;
