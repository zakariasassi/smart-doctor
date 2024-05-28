import React from 'react'

function Nav() {
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>الرئيسية</a></li>
        <li><a>تشخيص طبي</a></li>
      </ul>
    </div>
    <a className=" font-bold text-teal-400 text-xl">نظام الرعاية الإلكتروني</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
    <li className='bg-teal-400 rounded-lg text-white '><a >الرئيسية</a></li>
    <li className='bg-teal-400 rounded-lg text-white '><a>تشخيص طبي</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <a  >دخول</a>
    <a  href='/signup' className="bg-teal-400 p-2 rounded-lg text-white cursor-pointer hover:bg-teal-500">انشاء حساب</a>
  </div>
</div>
    </>
  )
}

export default Nav