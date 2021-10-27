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
          <h2>{balance.funds}</h2>
          <h2>Latest transactions</h2>
          {balance.transactions.map(t =>
            <>
            <div>{t.item}</div>
            <div>${t.amount}</div>
            <div>{t.date}</div>
            </>
            )}
          </div>
          )}
    </>);
}
;

