
const FeedbackList = ({ feedback }) => {
  if (feedback.length === 0)
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 py-8">No feedback submitted yet.</p>
      </div>
    );

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-6 text-center text-indigo-800">All Feedback</h3>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-indigo-50">
            <tr>
              <th className="py-3 px-6 border-b border-indigo-100 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 border-b border-indigo-100 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 border-b border-indigo-100 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Comment</th>
              <th className="py-3 px-6 border-b border-indigo-100 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {feedback.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{item.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{item.name}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{item.comment}</td>
                <td className="py-4 px-6 text-sm text-gray-500">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackList;
