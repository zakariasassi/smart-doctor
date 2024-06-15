
function Nav() {


  const logout = () => {
    window.localStorage.clear();
    window.location.replace('/login')
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              

              {window.localStorage.getItem("isLogin") ? (
                <>
                <li>
                <a href="/home">الرئيسية</a>
              </li>
                  <li className="bg-teal-400 rounded-lg text-white ">
                    <a href="/body">تشخيص طبي</a>
                  </li>

                  <li className="bg-teal-400 rounded-lg text-white ">
                    <a href="/body">ادخل اعراضك </a>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <a className=" font-bold text-teal-400 text-xl">
            نظام الرعاية الإلكتروني
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
        

            {window.localStorage.getItem("isLogin") ? (
              <>
                  <li className="bg-teal-400 rounded-lg text-white ">
              <a href="/home">الرئيسية</a>
            </li>
                <li className="bg-teal-400 rounded-lg text-white ">
                  <a href="/body">تشخيص طبي</a>
                </li>

                <li className="bg-teal-400 rounded-lg text-white ">
                    <a href="/body">ادخل اعراضك </a>
                  </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        {window.localStorage.getItem("isLogin") ? (
          <>
          
            <div className="navbar-end flex gap-4 mr-4">
            <a onClick={logout} className="text-xs bg-red-500 px-4 py-1 text-white rounded-lg hover:bg-red-400 cursor-pointer ">
                خروج
              </a>

              <a className="text-xl ">
                {JSON.parse(window.localStorage.getItem("user")).user?.name}
              </a>


             

              <img
                className="w-7 "
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              />
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end flex gap-4">
              <a href="/login">دخول</a>
              <a
                href="/signup"
                className="bg-teal-400 p-2 rounded-lg text-white cursor-pointer hover:bg-teal-500"
              >
                انشاء حساب
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Nav;
