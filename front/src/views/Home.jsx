import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBalance } from '../redux/actions';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBalance());
    }, []);

    const balance = useSelector(state => state.balance);
    return (<>
    {balance === undefined || null ? (
        <div> Loading... </div>
    ) : (
            <div>
                <h2>Your Balance</h2>
                <h2>${balance.funds}</h2>
                <h2>Latest transactions</h2> <Link to='/transactions'><h4>See all</h4></Link>
                {balance.transactions.map(t =>
                    <div className="t-card">
                    <Link className="link" to={`/transaction/${t.id}`}>
                        <div>{t.date}</div>
                        <div className="2nd-line">
                            <div>{t.item}</div>
                            <div style={{color: t.type === "INFLOW" ? 'green' : 'red'}}>${t.amount}</div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </Link>
                    </div>
                )}
            </div>
        )}
    </>);
}
;

