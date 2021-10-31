import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBalance } from '../redux/actions';
import '../css/Card.css';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBalance());
    }, [dispatch]);

    const balance = useSelector(state => state.balance);
    const limited = () => balance ? [...balance.transactions].reverse().slice(0,10) : undefined;
    return (<>
    {!balance ? (
        <div> Loading... </div>
    ) : (
            <div>
                <h2>Your Balance</h2>
                <h2>${balance.funds}</h2>
                <div className="t-cards">
                <h2>Latest transactions</h2>
                <Link className="link" to='/transactions'><h4>See all</h4></Link>
                {limited().map(t =>
                        <Link className="link t-card" to={`./transaction/${t.id}`}>
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
                        </Link>
                )}
                </div>
            </div>
        )}
    </>);
}
;

