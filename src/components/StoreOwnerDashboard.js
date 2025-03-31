function StoreOwnerDashboard() {
    const ratings = [
      { user: "John Doe", rating: 4, comment: "Great service!" },
      { user: "Jane Doe", rating: 5, comment: "Loved it!" },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Store Owner Dashboard</h2>
        <h3 className="text-lg font-semibold mb-2">Ratings for Your Store</h3>
        <ul>
          {ratings.map((r, index) => (
            <li key={index} className="border p-4 mb-2 rounded">
              <p><strong>User:</strong> {r.user}</p>
              <p><strong>Rating:</strong> {r.rating}</p>
              <p><strong>Comment:</strong> {r.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default StoreOwnerDashboard;
  