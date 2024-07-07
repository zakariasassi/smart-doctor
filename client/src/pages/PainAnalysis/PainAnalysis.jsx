import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function PainAnalysis() {
  const navigate = useNavigate();
  const notify = (msg) => toast(msg , {
    position: 'bottom-right',
  });

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
    if (selectedQuestionIds.length === 0) {
      return notify("يجب الاجابة علي سؤال واحد علي الاقل");
    } else {
      navigate(`/resulte/${selectedQuestionIds}`);
      console.log("Pain Data:", painData);
      console.log("Selected Question IDs:", selectedQuestionIds);
    }
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
    <div className="flex items-center justify-center h-screen p-5 bg-gradient-to-br from-teal-300 to-teal-600">
      <ToastContainer />
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-center text-teal-700">تحليل الأعراض</h1>
        <div className="space-y-6">
          {questionsState?.map((q, index) => (
            <div key={q._id} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="mb-2 text-lg font-semibold text-center">{q.qution}</p>
              <div className="flex justify-around">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="نعم"
                    // checked={painData[q.name] === "نعم"}
                    onChange={(event) => handleChange(event, q._id)}
                    name={q.name}
                    className="text-teal-500 form-radio"
                  />
                  <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500" />
                  <span>نعم</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="لا"
                    // checked={painData[q.name] === "لا"}
                    onChange={(event) => handleChange(event, q._id)}
                    name={q.name}
                    className="text-red-500 form-radio"
                  />
                  <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
                  <span>لا</span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <a
            className="p-3 text-white bg-teal-500 rounded-lg hover:bg-teal-700"
            href="/body"
          >
            عودة
          </a> 
          <button
            className="p-3 text-white bg-teal-500 rounded-lg hover:bg-teal-700"
            onClick={startAnalysis}
          >
            بدء عملية تحليل الأعراض
          </button>
        </div>
      </div>
    </div>
  );
}

export default PainAnalysis;
