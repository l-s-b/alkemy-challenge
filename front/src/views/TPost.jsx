import React, { useState } from "react";
import axios from 'axios';
import "../css/FormCard.css";
import { useHistory } from "react-router-dom";

export default function TPost() {
  const { push } = useHistory();
  const [values, setValues] = useState({
    type: "",
    item: "",
    amount: null,
    date: "",
    category: "",
  });

  function handleChange(e) {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (values.type && values.item && values.amount && values.date
        && values.category) {
    axios.post('http://localhost:1337/api/transaction', values)
        .then(response => {
          axios.get('http://localhost:1337/api/transactions')
          .then(results => { push(`/transactions`) });
            alert("New transaction successfully registered.");
        }).catch(e => console.error(e));
    }

    else {alert ('All fields are required.')}
    }

  return (
    <div className="contRend">
      <span className="formTitle">Register new transaction</span>
      <form onSubmit={handleSubmit}>
        <div className="contForm2">
          {" "}

          <div className="row">
            <label>Type: </label>
            <div className="inputCheck">
              <select name="type" onChange={handleChange} defaultValue="">
                <option value="" disabled>
                  Select:
                </option>
                <option value="INFLOW">Inflow</option>
                <option value="OUTFLOW">Outflow</option>
              </select>
            </div>
          </div>

          <div className="row">
            <label>Amount:</label>
            <div className="separator"></div>
            <div className="inputCheck">
              <span>$</span>
              <input
                type="number"
                step="0.01"
                name="amount"
                value={values.amount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <label>Item: </label>
            <div className="inputCheck">
              <input
                type="text"
                name="item"
                value={values.item}
                onChange={handleChange}
                placeholder="(concept, description)"
              />
            </div>
          </div>

          <div className="row">
            <label>Category: </label>
            <div className="inputCheck">
              <select name="category" onChange={handleChange} defaultValue="">
                <option value="" disabled>
                  Select:
                </option>
                <option value="Food">Food</option>
                <option value="Clothing">Clothing</option>
                <option value="Transportation">Transportation</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Supplies">Supplies</option>
                <option value="Services">Services</option>
                <option value="Salary">Salary</option>
                <option value="Rent">Rent</option>
                <option value="Shares">Shares</option>
                <option value="Donations">Donations</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="row">
            <label>Date: </label>
            <div className="separator"></div>
            <div className="inputCheck">
              <input
                className="date"
                type="text" //possibly "date"
                name="date"
                value={values.date}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>
        </div>

        <button className="bigBtn" type="submit">
          Register Transaction
        </button>

      </form>
    </div>
  );
}
