import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login() {
  const notify = (msg) => toast(msg , {
    position:'top-center'
  });

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const loginUser = async (e) => {
      e.preventDefault();
      // if(!email || !password) {
      //   notify("الرجاء ادخال البيانات")
      // }
      try {
          const response = await axios.post("http://localhost:3000/user/login", {
              email: email,
              password: password,
          });
          if(response.status === 201 || response.status === 200) {
            window.localStorage.setItem("user" , JSON.stringify(response.data));
            window.localStorage.setItem("isLogin" , true);
            window.location.replace('/home')
          }
          if(response.status == 400 ||  response.status == 404) {
            return notify("تاكد من البيانات")
          }
  
      } catch (error) {
         notify(error.response.data.message)
          console.error("Error creating user:", error.response ? error.response.data : error.message);
      }
  };

  
  return (
    <>
    <ToastContainer />
    
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="w-full h-full mx-auto"
        src="https://cdn.pixabay.com/photo/2021/11/20/03/17/doctor-6810751_640.png"
        alt="Your Company"
      />
      <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
        تسجيل دخول 
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
              placeholder="E-mail"
              required
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
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
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              required
              className="block p-2 w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

      
          <button
            onClick={e => loginUser(e)}
            className="flex w-full  mt-3  justify-center rounded-md bg-teal-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
         دخول
          </button>

    
     

      {/* <p className="mt-10 text-sm text-center text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p> */}
    </div>

  </div>
  

    </>

  )
}

export default Login