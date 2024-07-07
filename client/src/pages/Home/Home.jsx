import doctor from '../../assets/doctor.png';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import { faStethoscope, faClock, faHeartbeat, faUserShield, faPhoneAlt, faEnvelope, faMapMarkerAlt, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
function Home() {
  const features = [
    { icon: faStethoscope, title: 'سهولة الوصول والتفاعل', description: 'يوفر النظام واجهة مستخدم بديهية وسهلة الاستخدام لجميع الفئات العمرية.' },
    { icon: faClock, title: 'توفير الوقت والجهد', description: 'يساعد النظام في تقديم الرعاية الصحية بشكل فعال، مما يوفر الوقت والجهد للمستخدمين.' },
    { icon: faHeartbeat, title: 'توجيهات صحية فورية وموثوقة', description: 'يقدم النظام توجيهات وتوصيات صحية مبنية على الأعراض المقدمة والبيانات الطبية.' },
    { icon: faUserShield, title: 'دعم القرار الطبي', description: 'يمكن للنظام أن يكون أداة داعمة للأطباء في عملية اتخاذ القرار الطبي.' },
  ];

  return (
    <>
      <div className="w-screen h-full bg-gradient-to-tr from-teal-300 to-teal-500" dir='rtl'>
        <div className="flex flex-col items-center">
          <div className="pt-20 text-center">
            <p className="text-5xl font-bold text-white md:text-8xl">
              مرحبا بك في موقع الكشف الطبي
            </p>
          </div>
          <div>
            <img src={doctor} className="w-full h-[400px] md:h-[600px] object-cover" alt="Doctor"/>
          </div>
        </div>
      </div>

      <section className="flex flex-col py-10 text-center bg-white ">
        <h2 className="mb-5 text-4xl font-bold text-teal-500">عن الموقع</h2>
        <p className="max-w-4xl mx-auto text-xl text-gray-600">
          موقع الكشف الطبي يقدم خدمات طبية شاملة وسريعة عبر الإنترنت. يمكن للمرضى إدخال الأعراض التي يعانون منها عبر منصة الكشف الطبي، وبناءً على هذه الأعراض، يمكن توجيههم إلى التشخيص المحتمل والخطوات التالية الموصى بها مثل زيارة الطبيب أو إجراء فحوصات إضافية.
        </p>
    <div className='w-screen mt-10'> 
    <Link to={'/body'} className='px-10 py-5 mt-8 text-xl text-white bg-teal-500 hover:bg-teal-600 rounded-xl '>ابداء التشخيص الطبي الان</Link>

    </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-5 text-4xl font-bold text-center text-gray-800">مميزاتنا</h2>
          <div className="flex items-center justify-center">
            <div className="grid w-full grid-cols-1 gap-6 max-w-7xl md:grid-cols-1 lg:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 text-center bg-white">
        <h2 className="mb-5 text-4xl font-bold text-gray-800">خدماتنا</h2>
        <div className="max-w-6xl mx-auto text-xl text-gray-600">
          <p className="mb-5">نقدم مجموعة واسعة من الخدمات الطبية التي تشمل:</p>
          <ul className="mx-auto mb-5 text-right list-disc list-inside" dir='rtl'>
            <li>الفحوصات الطبية الشاملة</li>
            <li>الاستشارات الطبية عن بُعد</li>
            <li>تحليل البيانات الطبية وتقديم التقارير</li>
            <li>توجيهات صحية مبنية على الأعراض المدخلة</li>
            <li>دعم القرار الطبي للأطباء</li>
          </ul>
          <p>هدفنا هو تقديم رعاية صحية ذات جودة عالية بطريقة مريحة وفعالة.</p>
        </div>
      </section>

      <section className="py-10 text-center bg-gray-100">
        <h2 className="mb-5 text-4xl font-bold text-gray-800">تواصل معنا</h2>
        <div className="max-w-4xl mx-auto">
          <p className="mb-5 text-xl text-gray-600">إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، لا تتردد في التواصل معنا عبر الوسائل التالية:</p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <faPhoneAlt className="mr-2"/>
              <span>123-456-7890</span>
            </div>
            <div className="flex items-center">
              <faEnvelope className="mr-2"/>
              <span>info@medicalsite.com</span>
            </div>
            <div className="flex items-center">
              <faMapMarkerAlt className="mr-2"/>
              <span>123 شارع الصحة، المدينة، البلد</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-white bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">موقع الكشف الطبي</h5>
            <p>تقديم خدمات طبية شاملة وسريعة عبر الإنترنت.</p>
          </div>
          <div className="flex flex-col items-start text-right md:flex-row" dir='rtl'>
            <a href="#" className="mb-2 md:mr-4 md:mb-0 hover:underline">الرئيسية</a>
            <a href="#" className="mb-2 md:mr-4 md:mb-0 hove r:underline">عن الموقع</a>
            <a href="#" className="mb-2 md:mr-4 md:mb-0 hover:underline">اتصل بنا</a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center md:mr-4">
              <faPhoneAlt className="mr-2"/>
              <span>123-456-7890</span>
            </div>
            <div className="flex items-center">
              <faEnvelope className="mr-2"/>
              <span>info@medicalsite.com</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
