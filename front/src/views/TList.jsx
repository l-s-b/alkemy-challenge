import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // eslint-disable-next-line
import { Link } from 'react-router-dom';
import { getTransactionList, deleteTransaction } from '../redux/actions';
import '../css/Card.css';

export default function TList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactionList());
    }, [dispatch, deleteTransaction()]);

    const list = useSelector(state => state.transactionList);
    return (<>
    {list ? (
            <div className="t-cards">
                <h2>All transactions</h2>
                {list.map(t =>
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
                                <button className="t-btn btn edit-btn">Edit</button>
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