import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // eslint-disable-next-line
import { Link } from 'react-router-dom';
import { getTransactionList, deleteTransaction, clearTransaction } from '../redux/actions';
import '../css/Card.css';

export default function TList() {
    const dispatch = useDispatch();
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const list = useSelector(state => state.transactionList);
    const reversed = () => list ? [...list].reverse() : undefined;

       useEffect(() => {
        dispatch(getTransactionList(type, category));
        }, [dispatch, type, category]);


    const handleType = (e) => {
        e.preventDefault();
        setType(e.target.value);
      };

      const handleCategory = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
      };

    return (<>
    {list ? (
            <div className="t-cards">
                <h2 className="t-title">My transactions</h2>

                <div className="t-filters">
                <label id="filter-label">Filter by:</label>

                <div className="t-select">
            <select onChange={handleType} defaultValue="">
              <option value="" disabled>Direction:</option>
              <option value="INFLOW">Incomes</option>
              <option value="OUTFLOW">Expenditures</option>
              <option value="">Incomes and expenditures</option>
            </select>
          </div>

          <div className="t-select">
            <select onChange={handleCategory} defaultValue="">
              <option value="" disabled>Category:</option>
              <option value="">All categories</option>
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

                {reversed().map(t =>
                    <div className="t-card" id={t.id}>
                        <div className="t-date">{t.date}</div>
                            <div className="t-item">{t.item}</div>
                            <div className="t-row">
                                <div className="t-amount"
                                style={{color: t.type === "INFLOW" ? 'green' : 'red'}}
                                >
                                    ${t.amount.toFixed(2)}
                                </div>
                                <Link className="link t-btn btn" to={`./transaction/${t.id}`}>Detail</Link>
                                <Link className="link t-btn btn" to={`./transaction/edit/${t.id}`}>Edit</Link>
                                <button
                                    className="t-btn btn delete-btn"
                                    onClick={deleteTransaction(t.id)}
                                    >Delete
                                </button>
                            </div>
                        </div>

                )}
            </div>
        ) : list === undefined ? <div> Loading... </div>
        : <div> List not found. </div>
        }
    </>);
}
;