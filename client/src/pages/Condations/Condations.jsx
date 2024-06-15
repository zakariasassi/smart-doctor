import React from 'react'

function Condations() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row w-full justify-center'>
            <img
                src='https://cdn-icons-png.flaticon.com/512/2234/2234821.png'

            />
        </div>

        <div className='text-right p-5 text-2xl' dir='rtl'>
      <h2 className='font-bold'>شروط الاستخدام</h2>
      <p>يرجى قراءة شروط الاستخدام قبل البدء بهذا الفحص، حيث نرغب بتذكيرك أن:</p>
      <ol>
        <li>1. لا يعد هذا الفحص تشخيصاً طبياً لحالتك. إذ يجب ألا يستخدم هذا الفحص إلا لغرض معرفي أو للإسترشاد. كما لا يحل محل التشخيص أو الرأي الذي يقدمه الطبيب.</li>
        <li>2. لا تستخدم هذه الأداة في الحالات الإسعافية. إذ يجب عليك الاتصال بالإسعاف فوراً إذا كنت تعاني من حالة طارئة أو إسعافية.</li>
        <li>3. بياناتك ستبقى سرية وآمنة. البيانات التي سنحصل عليها ستبقى سرية وآمنة. حيث لن يتم مشاركتها أو استخدامها لتحديد هويتك.</li>
      </ol>
      {/* <div>
        <label>
          <input type="checkbox" /> اقرأ وأقبل شروط الاستخدام.
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> أوافق على إعطاء معلوماتي الصحية بغرض إجراء هذا الفحص الطبي. لمزيد من المعلومات يمكنك الاطلاع على سياسة الخصوصية.
        </label>
      </div> */}
    </div>

    </div>
  )
}

export default Condations