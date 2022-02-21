import { useEffect, useState } from "react";
import axios from "axios";

interface APIRes {
  id: string;
  userId: string;
  body: string;
  title: string;
}

const DataTable = (): JSX.Element => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data Display to Table</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserID</th>
            <th>API Body</th>
            <th>API Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: APIRes) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.body}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
