import { useEffect, useState } from "react";

interface DataStyle {
  name: string;
  dob: string;
  age: number;
}

const data: Array<DataStyle> = [
  {
    name: "Himanshu",
    age: 22,
    dob: "01/01/1998",
  },
  {
    name: "Vinay",
    age: 20,
    dob: "21/01/1999",
  },
  {
    name: "Malti",
    age: 38,
    dob: "09/01/1982",
  },
  {
    name: "Ajay",
    age: 50,
    dob: "01/01/1970",
  },
  {
    name: "Prakash",
    age: 40,
    dob: "04/01/1980",
  },
  {
    name: "Vineeta",
    age: 26,
    dob: "12/01/1992",
  },
  {
    name: "Shivani",
    age: 23,
    dob: "23/01/1995",
  },
  {
    name: "Akshita",
    age: 24,
    dob: "25/01/1994",
  },
  {
    name: "Jaya",
    age: 25,
    dob: "11/01/1993",
  },
];

const BDaySort = (): JSX.Element => {
  const [localData, setLocal] = useState<Array<DataStyle>>([]);

  const applyFilter = (sort: string) => {
    const getSortOrder = (prop: string) => {
      return function (a: any, b: any) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    };

    const tableData = [...data];

    tableData.sort(getSortOrder(sort));

    setLocal(tableData);
  };

  useEffect(() => {
    setLocal(data);
  }, []);

  return (
    <div>
      <h1>BDaySort</h1>

      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {localData.map((item: DataStyle, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <form>
        <label>Sort By</label>
        <select
          onChange={({ target }) => {
            applyFilter(target.value);
          }}
        >
          <option value="name">Name</option>
          <option value="age">age</option>
        </select>
      </form>
    </div>
  );
};

export default BDaySort;
