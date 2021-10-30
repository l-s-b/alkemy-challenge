import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearTransaction, getTransaction, putTransaction } from '../redux/actions';
import axios from 'axios';

export default function TEdit() {
    const dispatch = useDispatch();
    const { id } = useParams();
    let [values, setValues] = useState({});

    useEffect(() => {
        dispatch(getTransaction(id));
        return () => { dispatch(clearTransaction()); };
    }, [dispatch, id]);

    const t = useSelector(state => state.transactionByID);

    function handleChange(e) {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value,
        }));
      }

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost:1337/api/transaction/${t.id}`, values)
            .then(response => {
                alert("Transaction successfully updated.");
            }).catch(e => console.error(e));
        }

    return (<>
        {t === undefined || null ? (
        <div> Loading... </div>
    ) : (
          <div className="contRend">
            <h2>Edit transaction</h2>
            <form onSubmit={handleSubmit}>
              <div className="contForm2">
                <div className="row">
                  <label>Type: </label>
                  <div className="inputCheck">
                    <input disabled value={t.type} />
                  </div>
                </div>

                <div className="row">
                  <label>Amount: $</label>
                  <div className="separator"></div>
                  <div className="inputCheck">
                    <input
                      type="number"
                      name="amount"
                      value={t.amount}
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
                      value={t.item}
                      onChange={handleChange}
                      placeholder="(concept, description)"
                    />
                  </div>
                </div>

                <div className="row">
            <label>Category: </label>
            <div className="inputCheck">
              <select name="category" onChange={handleChange} defaultValue="">
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
                value={t.date}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>

              </div>
            </form>
          </div>
          )}
      </>
    );
};

