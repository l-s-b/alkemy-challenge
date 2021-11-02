import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { clearTransaction, getTransaction } from '../redux/actions';
import { getTransactionList, deleteTransaction, getToEdit } from '../redux/actions';

export default function TDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { push } = useHistory();
    const [lastDeleted, setLastDeleted] = useState("");

    useEffect(() => {
        dispatch(getTransaction(id));
        return () => { dispatch(clearTransaction()); };
    }, [dispatch, id]);

    const t = useSelector(state => state.transactionByID);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteTransaction(e.target.value));
        setLastDeleted(e.target.value);
        push(`../../transactions`);
      };

      const handleEdit = (t) => {
        dispatch(getToEdit(t));
        push(`./edit/${t.id}`);
      }

    return (<>
    {!t ? (
        <div> Loading... </div>
    ) : (
            <div>
                <h2 className="t-title">Transaction Detail</h2>
                    <div className="contRend" id={t.id}>
                        <h2>{t.item}</h2>
                        <div className="contForm2">
                            <div className="row">
                            <label>Amount:</label>
                            <div className="separator"></div>
                            <div className="t-amount"
                            style={{color: t.type === "INFLOW" ? 'green' : 'red'}}>
                                ${t.amount.toFixed(2)}
                            </div>
                            </div>

                            <div className="row">
                            <label>Type:</label>
                            <div>{t.type}</div>
                            </div>

                            <div className="row">
                            <label>Registered on:</label>
                            <div className="separator"></div>
                            <div>{t.date}</div>
                            </div>

                            <div className="row">
                            <label>Category:</label>
                            <div>{t.category}</div>
                            </div>

                        </div>
                        <div className="row">
                            <button className="t-btn btn" id="edit-btn" onClick={() => handleEdit(t)}>
                                Edit
                            </button>
                            <button
                                value={t.id}
                                className="t-btn btn"
                                id="delete-btn"
                                onClick={handleDelete}
                                >Delete
                            </button>
                        </div>
                    </div>
            </div>
        )}
    </>);
}
;