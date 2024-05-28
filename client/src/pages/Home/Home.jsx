import React from 'react'

function Home() {
  return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://assets.delawaretoday.com/2023/10/dt-oct-23-top-doctors-AdobeStock_622269781-1068x712.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      <h1 className="mb-5 text-5xl font-bold text-white">مرحبا بك في موقع الكشف الطبي</h1>
      <p className="mb-5">

      يمكن للمرضى إدخال الأعراض التي يعانون منها عبر منصة الكشف الطبي، وبناءً على هذه الأعراض، يمكن توجيههم إلى التشخيص المحتمل والخطوات التالية الموصى بها مثل زيارة الطبيب أو إجراء فحوصات إضافية.
      </p>
      <button className=" px-6 py-2 rounded-xl bg-teal-600 ">جرب مجانا</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Home