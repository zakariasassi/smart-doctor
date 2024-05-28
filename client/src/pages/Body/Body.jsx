import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Body() {
  const [placesState, setPlaces] = useState([]);

  const navigate = useNavigate();

  function handleClick(e , id) {
    console.log(e.target.dataset.name);
    console.log("Circle clicked!"); 
    navigate(`/analysis/${id}`);
  }

  const getdata = async () => {
    const places = await axios.get("http://localhost:3000/places");
    if (places) {
      setPlaces(places.data);
      console.log(places.data);
    }
   
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div className="h-auto  m-auto w-auto flex items-center justify-center   shadow-md ">
        <div>
        <p className="text-center text-xl ">
           مرحبا بك في تطبيق الدكتور الالي
          </p>
          <p className="text-center text-red-500 text-4xl font-bold mb-10">
            يرجي اختيار  مكان الالم
          </p>

          <div className="w-full h-auto grid grid-cols-3 justify-center items-center">
            {placesState.map((index, key) => {
              return (
                <>
                  <div
                    onClick={e => handleClick(e , index._id)}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <p className="text-2xl font-black text-center">
                      {index.name}
                    </p>
                    <img
                      className="w-60"
                      src={index.img}
                      alt="معدة"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
