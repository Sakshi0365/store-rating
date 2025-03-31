import { useState } from "react";

function AdminDashboard() {
  const [stores, setStores] = useState([
    { id: 1, name: "ABC Mart", email: "abc@store.com", address: "Mumbai", rating: 4.5 },
    { id: 2, name: "XYZ Store", email: "xyz@store.com", address: "Pune", rating: 3.8 },
  ]);
  const [newStore, setNewStore] = useState({ name: "", email: "", address: "" });

  const handleAddStore = () => {
    if (newStore.name && newStore.email && newStore.address) {
      setStores([...stores, { ...newStore, id: stores.length + 1, rating: 0 }]);
      setNewStore({ name: "", email: "", address: "" });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Add Store Form */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Add Store</h3>
        <input
          type="text"
          placeholder="Store Name"
          className="w-full p-2 border rounded mb-2"
          value={newStore.name}
          onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          value={newStore.email}
          onChange={(e) => setNewStore({ ...newStore, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-2 border rounded mb-2"
          value={newStore.address}
          onChange={(e) => setNewStore({ ...newStore, address: e.target.value })}
        />
        <button onClick={handleAddStore} className="w-full bg-blue-600 text-white py-2 rounded">
          Add Store
        </button>
      </div>

      {/* Store List */}
      <h3 className="text-lg font-semibold mb-2">Stores</h3>
      <ul>
        {stores.map(store => (
          <li key={store.id} className="border p-4 mb-2 rounded">
            <h4 className="font-semibold">{store.name}</h4>
            <p>Email: {store.email}</p>
            <p>Address: {store.address}</p>
            <p>Rating: {store.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
