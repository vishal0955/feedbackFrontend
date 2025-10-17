import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
// import { getFeedback } from "./api";
import axios from "axios";

const App = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/feedback");
      setFeedback(res.data);
    } catch {
      console.error("Error fetching feedback");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="min-h-screen w-full  py-12 px-4 sm:px-6">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-800 tracking-tight">Product Feedback Dashboard</h1>
        <div className="bg-white rounded-xl  border-gray-600 shadow-xl overflow-hidden mb-8">
          <FeedbackForm onFeedbackAdded={fetchFeedback} />
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
              <p className="ml-3 text-indigo-600 font-medium">Loading feedback...</p>
            </div>
          ) : (
            <FeedbackList feedback={feedback.data || []} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
