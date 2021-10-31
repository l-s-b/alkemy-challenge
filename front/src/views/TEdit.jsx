import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearTransaction, getTransaction, putTransaction } from '../redux/actions';
import axios from 'axios';
export default function TEdit() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [type, setType] = useState("");
    const [item, setItem] = useState("");
    const [amount, setAmount] = useState(parseFloat(0));
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");

/*     useEffect(() => {
        dispatch(getTransaction(id)); // eslint-disable-next-line 
    }, []); */

/*     useEffect(() => {
      return () => { dispatch(clearTransaction()); };// eslint-disable-next-line 
  }, []);
 */

  useEffect(() => {
    console.log("TRANSACTION BY ID: ", id); // eslint-disable-next-line 
},[]);

    const t = useSelector(state => state.transactionByID);
    console.log("TRANSACTION BY ID: ", t); //OK
    
    t && setType(t.type);
    t && setItem(t.item);
    t && setAmount(t.amount);
    t && setDate(t.date);
    t && setCategory(t.category);
/*    setValues(values => t && ({
    ...values,
    item: t.item,
    amount: parseFloat(t.amount),
    date: t.date,
    category: t.category,
  })); */
/* 
    function handleChange(e) {
        setValues(values => ({
          ...item,
          [e.target.name]: e.target.value,
        })) ;
      } */
    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost:1337/api/transaction/${t.id}`, /* {type, item, amount, date, category} */)
            .then(response => {
                alert("Transaction registry successfully updated.");
            }).catch(e => console.error(e));
        }
    return (<>
        {t === undefined || null ? (
        <div> Loading... </div>
    ) : (
          <div className="contRend">
            <h2>Edit transaction</h2>
            <form onSubmit={handleSubmit}>
              <div className="contForm2">
                <div className="row">
                  <label>Type: </label>
                  <div className="inputCheck">
                    <label>{/* {type} */}</label>
                  </div>
                </div>
                <div className="row">
                  <label>Amount: $</label>
                  <div className="separator"></div>
                  <div className="inputCheck">
                    <input
                      type="number"
                      name="amount"
                      /* value={amount} */
                      onChange={e => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <label>Item: </label>
                  <div className="inputCheck">
                    <input
                      type="text"
                      name="item"
                      /* value={item} */
                      onChange={e => setItem(e.target.value)}
                      placeholder="(concept, description)"
                    />
                  </div>
                </div>
                <div className="row">
            <label>Category: </label>
            <div className="inputCheck">
              <select name="category" onChange={e => setCategory(e.target.value)} defaultValue="">
                <option /* value={category} */>{/* {category} */}</option>
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
          <div className="row">
            <label>Date: </label>
            <div className="separator"></div>
            <div className="inputCheck">
              <input
                className="date"
                type="text" //possibly "date"
                name="date"
                /* value={date} */
                onChange={e => setDate(e.target.value)}
              />
            </div>
          </div>
              </div>
              <button className="bigBtn" type="submit">
          Edit
        </button>
            </form>
          </div>
          )}
      </>
    );
};
