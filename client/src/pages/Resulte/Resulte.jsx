import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Resulte() {
  const [resulte, setResulte] = useState([]);
  const { data } = useParams();

  const getAllData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/resulte/all/${JSON.stringify(Array(data))}`);
      if (res.data) {
        setResulte(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []); // Only run once on mount

  return (
    <div className="flex items-center justify-center h-screen text-right bg-gradient-to-br from-teal-300 to-teal-600" dir="rtl" >
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-center text-teal-700">نتائج تحليل الأعراض</h1>
        <ul className="space-y-6">
          {resulte.map((index, idx) => (
            <li key={idx} className="p-4 text-white bg-teal-500 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-right">{index.description}</h2>
                <span className="text-2xl font-bold text-white">-</span>
              </div>
              <p className="text-white">{index.advice}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-right text-gray-700">
          قد لا تكون قائمة الأمراض المحتملة هذه كاملة، وغرضها الوحيد هو الاسترشاد والاطلاع على ما يمكن أن يكون سبباً لهذه الأعراض، ولا تحل محل رأي الطبيب المختص، ولا يمكن اعتبارها استشارة أو نصيحة طبية.
        </p>
      </div>
    </div>
  );
}

export default Resulte;
