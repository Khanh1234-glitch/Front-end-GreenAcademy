import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InfoComponent() {
  const [userInfo, setUserInfo] = useState({
    fullName: localStorage.getItem("fullName"),
    nameUser: localStorage.getItem("nameUser"),
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  });

  const handleLogout = () => {
    if (localStorage.getItem("fullName")) {
      // Xóa toàn bộ dữ liệu trong local storage
      localStorage.clear();
      // Cập nhật state để trigger render lại component
      setUserInfo({});
      navigate("/dang-nhap");
    } else {
      console.log("Không có dữ liệu người dùng để đăng xuất.");
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = {
      fullName: localStorage.getItem("fullName"),
      nameUser: localStorage.getItem("nameUser"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    };

    setUserInfo(storedUser);
  }, []);
  return (
    <>
      <div className="m-13">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            <strong>Thông tin khách hàng</strong>
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Thông tin chi tiết của khách hàng
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Họ tên
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {localStorage.getItem("fullName")}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Mật khẩu
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {localStorage.getItem("password")}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {localStorage.getItem("email")}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Tên đăng nhập
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {localStorage.getItem("nameUser")}
              </dd>
            </div>
          </dl>
          <div className=" mt-13 flex justify-end ">
            <Link
              to={"/"}
              onClick={handleLogout}
              className="  p-2 text-gray-50 rounded-lg bg-red-700"
            >
              Đăng xuất
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoComponent;
