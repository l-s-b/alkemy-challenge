import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBalance } from '../redux/actions';
import '../css/TransactionCard.css';

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
                <h2 className="t-title">Your Balance</h2>
                <h2>${balance.funds}</h2>
                <div className="t-cards">
                <div id="balance-row">
                    <h2 className="t-title">Latest transactions (</h2>
                    <Link id="see_all" to='/transactions'><span>See all</span></Link>
                    <h2 className="t-title">)</h2>
                </div>
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
                            </div>
                        </Link>
                )}
                </div>
            </div>
        )}
    </>);
}
;

