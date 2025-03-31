
import { useEffect, useState } from "react";

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/stores") 
      .then((res) => res.json())
      .then((data) => setStores(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Stores</h2>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>{store.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
