import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctor from '../../assets/doctor2.png'
import toast, { Toaster } from 'react-hot-toast';

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

      if (response.status === 201) {
        window.localStorage.setItem("user", JSON.stringify(response.data));
        window.localStorage.setItem("isLogin", true);

        navigate("/home");
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(
        "Error creating user:",
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <>
    <Toaster/>
      <div className="flex flex-row items-center justify-center flex-1 min-h-full lg:px-8">
        <div className=" w-[60%]  ">
          <img
            className="w-full h-screen mx-auto "
            src={doctor}
            alt="Your Company"
          />
          
        </div>

        <div className="mt-10 w-[40%] sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
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
                className="w-full select select-bordered select-sm"
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
            className="flex w-full mt-5 justify-center rounded-md bg-teal-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            انشاء حساب
          </button>

        <div className="flex justify-center w-full">
        <a className="mt-3 text-xs font-bold text-center" href="/terms" >  <a className="font-light">بالتسجيل في الموقع انت توافق علي</a> الشروط والاحكام  {" "}</a>

        </div>
          {/* <p className="mt-10 text-sm text-center text-gray-500">
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
