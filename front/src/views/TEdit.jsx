import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getToEdit, clearTransaction } from '../redux/actions';
import axios from 'axios';

export default function TEdit() {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const t = useSelector(state => state.transactionToEdit);
    /* console.log("TRANSACTION READY FOR UPDATE: ", t); */

    const [values, setValues] = useState({
      item: t.item,
      amount: parseFloat(t.amount),
      category: t.category,
      date: t.date,
    });

    useCallback(() => {
      dispatch(getToEdit());
      return () => { dispatch(clearTransaction())}; // eslint-disable-next-line
    }, []);


    function handleChange(e) {
      e.preventDefault();
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value,
        }));
        console.log(values);
      }

    function handleSubmit(e) {
      e.preventDefault();
        axios.put(`http://localhost:1337/api/transaction/${t.id}`, values)
          .then(response => {
            alert("Transaction registry successfully updated.");
            push(`/transactions`);
        }).catch(e => console.error(e));
          }

    return (<>
        {!t ? (
        <div> Loading... </div>
    ) : (
          <div className="contRend">
            <h2>Edit transaction</h2>
            <form onSubmit={handleSubmit}>
              <div className="contForm2">
                <div className="row">
                  <label>Type: </label>
                  <div className="inputCheck">
                    <label>{t.type}</label>
                  </div>
                </div>
                <div className="row">
                  <label>Amount: $</label>
                  <div className="separator"></div>
                  <div className="inputCheck">
                    <input
                      type="number"
                      step="0.01"
                      name="amount"
                      defaultValue={t.amount}
                      onChange={handleChange}/*{e => setAmount(e.target.value)} */
                    />
                  </div>
                </div>
                <div className="row">
                  <label>Item: </label>
                  <div className="inputCheck">
                    <input
                      type="text"
                      name="item"
                      defaultValue={t.item}
                      onChange={handleChange}/*{e => setItem(e.target.value)} */
                      placeholder="(concept, description)"
                    />
                  </div>
                </div>
                <div className="row">
            <label>Category: </label>
            <div className="inputCheck">
              <select name="category" onChange={handleChange} /*{e => setCategory(e.target.value)} */ defaultValue="">
                <option value={t.category}>{t.category}</option>
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
                defaultValue={t.date}
                onChange={handleChange} /*{e => setDate(e.target.value)} */
              />
            </div>
          </div>
              </div>
              <button className="bigBtn" type="submit">
          Edit
        </button>
            </form>
          </div>
          )}
      </>
    );
};
