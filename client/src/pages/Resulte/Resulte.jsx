import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Resulte() {

  const [ resulte , setResulte ] = useState([]);

  const { data } = useParams(); // Assume data is a JSON string of IDs
  const getAllData = async () => {
    try {
      // const idsArray = JSON.parse(data); // Convert data string to an array
      const res = await axios.get(`http://localhost:3000/resulte/all/${JSON.stringify(Array(data))}`);
      if (res) {
        console.log(res.data);
        setResulte(res.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(Array(data));

    getAllData();
  }, []); // Depend on data to re-run if data changes


  return (
    <div>
       <p className='text-right p-5'>نتائج تحليل الاعراض</p>
        <ul className='float-right p-5'>
          {
            resulte.map(index => {
              return (
                <>
                  <li>{index.description}</li>
                </>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Resulte