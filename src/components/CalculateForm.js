import React, { useContext, useState } from "react";
import * as helper from "./helper";

export default function CalculateForm(props) {
  const [value, setValue] = useState("");

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    const result = helper.calculate(value);
    setResult(result);
    e.preventDefault();
  };

  return (
    <div>
      <div>{`result => ${result}`}</div>
      <form onSubmit={handleSubmit}>
        <label>
          x:
          <input
            style={{ marginLeft: 10, marginRight: 10 }}
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
