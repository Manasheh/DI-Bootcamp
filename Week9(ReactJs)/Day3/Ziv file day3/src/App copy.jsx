import { useState, useEffect } from "react";
import Search from "./components/Search";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filter = users.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h2>Users</h2>
      <Search setSearch={setSearch}/>
      {filter.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
}

export default App;
