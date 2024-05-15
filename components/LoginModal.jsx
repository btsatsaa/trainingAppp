  import React, { useState } from "react";
  import { IoCloseOutline } from "react-icons/io5";
  import { useRouter } from "next/router";

  const LoginModal = ({ onClose }) => {
    const [users_phone, setPhone] = useState("");
    const [users_password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const router = useRouter();
    const [isVisible,setIsVisible]=useState(true)
    const close=()=>{
      setLoggedIn(false); // Нэвтрэлтийн төлөвийг шинэчлэх

      onClose()

      // // onClose()
      // setIsVisible(false)
      // router.push('/')
    }
    const handleLogin = async () => {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            users_phone: users_phone,
            users_password: users_password,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          alert("Нэвтрэх амжилттай боллоо!");
          setLoggedIn(true); // Нэвтрэлтийн төлөвийг шинэчлэх
          // Утасны дугаарыг хадгалах
          localStorage.setItem("phoneNumber", users_phone);
          localStorage.setItem('Login',"true")
          localStorage.setItem('phone',users_phone)
          console.log("Нэвтрэсэн хэрэглэгчийн утасны дугаар:", users_phone);
          router.push("/");
          onClose(); // Модалыг хаах
        } else {
          alert(`Нэвтрэх амжилтгүй. ${result.error}`);
          setLoggedIn(false); // Нэвтрэлтийн төлөвийг шинэчлэх
        }
      } catch (error) {
        console.error("Нэвтрэхэд алдаа гарлаа:", error);
        localStorage.setItem('Login',"false")
        alert("Дотоод серверийн алдаа. Дахин оролдоно уу.");
      }
    };
    return (
      <div>

      { isVisible&&(      <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-16 rounded-md shadow-md bg-secondary-light dark:bg-secondary-dark">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Нэвтрэх</h2>
        {/* Close button */}
        <button onClick={close}>
          <IoCloseOutline className="text-gray-500 text-4xl" />
        </button>
      </div>

      {/* Phone field */}
      <div className="mb-4 text-primary-dark dark:text-primary-light">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 text-primary-dark dark:text-primary-light"
        >
          Нэвтрэх утасны дугаар
        </label>
        <input
          type="tel"
          id="phone"
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="энд утасны дугаараа бичнэ үү"
          value={users_phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Password field */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 text-primary-dark dark:text-primary-light"
          >
          Нууц үг
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Нууц үгээ оруулна уу"
          value={users_password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>

      {/* Login button */}
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={handleLogin}
          >
          Нэвтрэх
        </button>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            />
          <span className="ml-4 text-sm text-gray-700">Сануулах</span>
        </label>
      </div>
    </div>)}
            </div>

    );
  };

  export default LoginModal;
