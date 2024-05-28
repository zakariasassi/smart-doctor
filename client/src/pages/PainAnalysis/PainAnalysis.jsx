import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PainAnalysis() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [questionsState, setQuestions] = useState([]);
  const [painData, setPainData] = useState({});
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);

  const handleChange = (event, questionId) => {
    const { name, value } = event.target;
    setPainData({ ...painData, [name]: value });

    if (value === "نعم") {
      setSelectedQuestionIds([...selectedQuestionIds, questionId]);
    } else if (value === "لا") {
      setSelectedQuestionIds(selectedQuestionIds.filter(id => id !== questionId));
    }
  };

  const startAnalysis = () => {
    navigate(`/resulte/${selectedQuestionIds}`);
    console.log("Pain Data:", painData);
    console.log("Selected Question IDs:", selectedQuestionIds);
  };

  const getQuestions = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/questions/getallById/${id}`);
      if (response) {
        setQuestions(response.data);
        console.log("Questions fetched:", response.data);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    console.log(id);
    getQuestions();
  }, [id]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100 text-3xl text-center">
      <div className="flex flex-col">
        {questionsState?.map((q, index) => (
          <div className="w-full" key={q._id}>
            <div className="flex flex-col">
              {q.qution}
              <div className="flex w-full justify-around">
                <label>
                  <input
                    type="radio"
                    value="نعم"
                    // checked={painData[q.name] === "نعم"}
                    onChange={(event) => handleChange(event, q._id)}
                    name={q.name}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    value="لا"
                    // checked={painData[q.name] === "لا"}
                    onChange={(event) => handleChange(event, q._id)}
                    name={q.name}
                  />
                  لا
                </label>
              </div>
            </div>
          </div>
        ))}
        <button
          className="bg-red-500 p-3 rounded-lg hover:bg-red-700 text-white mt-8"
          onClick={startAnalysis}
        >
          بدء عملية تحليل الاعراض
        </button>
        <a
          className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 text-white mt-8"
          href="/"
        >
          عودة
        </a>
      </div>
    </div>
  );
}

export default PainAnalysis;
