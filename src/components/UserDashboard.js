import { useState } from "react";

function UserDashboard() {
  const [ratings, setRatings] = useState([
    { store: "ABC Mart", rating: 4, comment: "Good service" },
  ]);

  const handleEdit = (index) => {
    const newRating = prompt("Enter new rating (1-5):", ratings[index].rating);
    if (newRating >= 1 && newRating <= 5) {
      const updatedRatings = [...ratings];
      updatedRatings[index].rating = newRating;
      setRatings(updatedRatings);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <h3 className="text-lg font-semibold mb-2">Your Ratings</h3>
      <ul>
        {ratings.map((r, index) => (
          <li key={index} className="border p-4 mb-2 rounded">
            <p><strong>Store:</strong> {r.store}</p>
            <p><strong>Rating:</strong> {r.rating}</p>
            <p><strong>Comment:</strong> {r.comment}</p>
            <button
              onClick={() => handleEdit(index)}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Edit Rating
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;
