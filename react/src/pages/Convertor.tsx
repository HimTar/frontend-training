import { useState } from "react";

const values = [0.085, 1.54, 0.049, 0.013, 2.7, 0.02];
const currencies = [
  "Chinese Yuan",
  "Yen",
  "Dinar",
  "Dollar",
  "Sri Lankan Rupee",
  "NZ Dollar",
];

const Convertor = (): JSX.Element => {
  const [curr, setCurr] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const convert = (e: any) => {
    e.preventDefault();
    setResult(amount * values[curr]);
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      <ul>
        <li>1 Indian Rupee = 0.049 Dubai Dinar</li>
        <li>1 Indian Rupee = 2.7 Sri Lankan Rupee</li>
        <li>1 Indian Rupee = 1.54 Japanese Yen</li>
        <li>1 Indian Rupee = 0.013 American Dollar</li>
        <li>1 Indian Rupee = 0.02 New Zealand Dollar</li>
        <li>1 Indian Rupee = 0.085 Chinese Yuan</li>
      </ul>

      <form onSubmit={convert}>
        <label>Enter amount in INR</label>
        <br />
        <input
          type="number"
          value={amount}
          onChange={({ target }) => {
            setAmount(parseInt(target.value));
          }}
          placeholder="0"
        />
        <br />
        <br />
        <label>Select currency</label>
        <br />
        <select
          onChange={({ target }) => {
            setCurr(parseInt(target.value));
            setAmount(0);
            setResult(0);
          }}
        >
          {currencies.map((name, ind) => {
            return (
              <option value={values[ind]} key={ind}>
                {name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <button type="submit">Convert</button>
      </form>
      {result ? (
        <h3>
          Amount after conversion : {result} {currencies[curr]}{" "}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default Convertor;
