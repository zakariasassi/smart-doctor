import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post("http://localhost:3000/user/sginup", {
        name: name,
        email: email,
        password: password,
        age: age,
        gender: gender,
      });

      console.log(response.data);
      if (response.status === 201) {
        window.localStorage.setItem("user", JSON.stringify(response.data));
        window.localStorage.setItem("isLogin", true);

        navigate("/home");
      }
    } catch (error) {
      console.error(
        "Error creating user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-row justify-center px-6 py-12 lg:px-8 items-center">
        <div className=" w-auto sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[800px] w-[800px] "
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-doctor-3985495-3299317.png?f=webp"
            alt="Your Company"
          />
          
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            فتح حساب جديد
          </h2>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              الاسم
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              البريد الالكتروني
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              العمر
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setAge(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              الجنس
            </label>
            <div className="mt-2">
              <select
                onChange={(e) => setGender(e.target.value)}
                className="select select-bordered select-sm w-full"
              >
                <option disabled selected>
                  الجنس
                </option>
                <option value={"ذكر"}>ذكر</option>
                <option value={"انثي"}>انثي</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                كلمة المرور
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            onClick={(e) => createUser(e)}
            className="flex w-full justify-center rounded-md bg-teal-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            انشاء حساب
          </button>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Signup;
