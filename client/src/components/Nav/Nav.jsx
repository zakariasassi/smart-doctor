
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
                className="w-5 h-5"
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
                  <li className="text-white bg-teal-400 rounded-lg ">
                    <a href="/body">تشخيص طبي</a>
                  </li>

                  {/* <li className="text-white bg-teal-400 rounded-lg ">
                    <a href="/body">ادخل اعراضك </a>
                  </li> */}
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <a className="text-xl font-bold text-teal-400 ">
            نظام الرعاية الإلكتروني
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-4 px-1 menu menu-horizontal">
        

            {window.localStorage.getItem("isLogin") ? (
              <>
                  <li className="text-white bg-teal-400 rounded-lg ">
              <a href="/home">الرئيسية</a>
            </li>
                <li className="text-white bg-teal-400 rounded-lg ">
                  <a href="/body">تشخيص طبي</a>
                </li>

                {/* <li className="text-white bg-teal-400 rounded-lg ">
                    <a href="/body">ادخل اعراضك </a>
                  </li> */}
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        {window.localStorage.getItem("isLogin") ? (
          <>
          
            <div className="flex gap-4 mr-4 navbar-end">
            <a onClick={logout} className="px-4 py-1 text-xs text-white bg-red-500 rounded-lg cursor-pointer hover:bg-red-400 ">
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
            <div className="flex gap-4 navbar-end">
              <a href="/login">دخول</a>
              <a
                href="/signup"
                className="p-2 text-white bg-teal-400 rounded-lg cursor-pointer hover:bg-teal-500"
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
