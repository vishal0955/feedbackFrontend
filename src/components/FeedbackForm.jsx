import { useState } from "react";
import axios from "axios";

const FeedbackForm = ({ onFeedbackAdded }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setError("Both fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await axios.post("http://localhost:5000/feedback",{ name, comment });
      setName("");
      setComment("");
      onFeedbackAdded();
    } catch {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="p-8 border-gray-300 border rounded-xl bg-white shadow-xl my-8 mx-auto max-w-3xl">

      <h2 className="text-2xl font-bold mb-6 text-indigo-800 text-center">
        Share Your Feedback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mx-2">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 shadow-sm"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 shadow-sm"
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        
        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg border border-red-100">
            {error}
          </p>
        )}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          {loading ? (
            <>
            
              Submitting...
            </>
          ) : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
