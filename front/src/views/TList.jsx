import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // eslint-disable-next-line
import { Link } from 'react-router-dom';
import { getTransactionList,  } from '../redux/actions';

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
            <div>
                <h2>All transactions</h2>
                {list.map(t =>
                    <div className="t-card" id={t.id}>
                        <div>{t.date}</div>
                        <div className="2nd-line">
                            <div>{t.item}</div>
                            <div style={{color: t.type === "INFLOW" ? 'green' : 'red'}}>
                                ${t.amount.toFixed(2)}
                            </div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        )}
    </>);
}
;