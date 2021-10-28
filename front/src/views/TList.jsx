import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // eslint-disable-next-line
import { Link } from 'react-router-dom';
import { getTransactionList,  } from '../redux/actions';
import '../css/Card.css';

export default function TList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactionList());
    }, [dispatch]);

    const list = useSelector(state => state.transactionList);
    return (<>
    {list === undefined || null ? (
        <div> Loading... </div>
    ) : (
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
                                <button className="btn t-btn">Edit</button>
                                <button className="btn t-btn">Delete</button>
                            </div>
                        </div>
                )}
            </div>
        )}
    </>);
}
;