import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearTransaction, getTransaction } from '../redux/actions';

export default function TDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTransaction(id));
        return () => { dispatch(clearTransaction()); };
    }, [dispatch, id]);

    const t = useSelector(state => state.transactionByID);
    console.log(t);
    return (<>
    {t === undefined || null ? (
        <div> Loading... </div>
    ) : (
            <div>
                <h2>Transaction Detail</h2>
                    <div className="t-card">
                        <div>{t.type}</div>
                        <div>{t.date}</div>
                        <div>{t.item}</div>
                        <div style={{color: t.type === "INFLOW" ? 'green' : 'red'}}>${t.amount}</div>
                        <div>Category: {t.category}</div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
            </div>
        )}
    </>);
}
;