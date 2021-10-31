import axios from 'axios';

export const GET_ALL_TRANSACTIONS = "GET_ALL_TRANSACTIONS";
export const GET_TRANSACTION_BY_ID = "GET_TRANSACTION_BY_ID";
export const GET_BALANCE = "GET_BALANCE";
export const POST_NEW_TRANSACTION = "POST_NEW_TRANSACTION";
export const EDIT_TRANSACTION = "EDIT_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

// GETs: [1-getBalance, 2-getList, 3-getTransaction(id)]
// CLEARs: [4-clearBalance, 5-clearList, 6-clearTransaction(id)]
// POST, PUT, DELETE: [7-postTransaction, 8-putTransaction, 9-deleteTransaction]

export function getBalance() { //WORKING
    return (dispatch) => {
        axios.get('http://localhost:1337/api/main')
            .then(response => {
                dispatch({
                    type: GET_BALANCE,
                    payload: response.data,
                })
            }).catch(e=> console.error(e));
    }
};

export function getTransactionList(type, category) { //WORKING
    return (dispatch) => {
        axios.get(`http://localhost:1337/api/transactions?type=${type}&category=${category}`)
            .then(response => {
                dispatch({
                    type: GET_ALL_TRANSACTIONS,
                    payload: response.data,
                })
            }).catch(e => console.error(e));
    }
};

export function getTransaction(id) {
    return (dispatch) => {
        axios.get(`http://localhost:1337/api/transaction/${id}`)
            .then(response => {
                dispatch({
                    type: GET_TRANSACTION_BY_ID,
                    payload: response.data,
                })
            })
    }
};

export function clearBalance() {
    return {
           type: GET_BALANCE,
           payload: undefined
   }
};

export function clearList() {
    return {
           type: GET_ALL_TRANSACTIONS,
           payload: undefined
   }
};

export function clearTransaction() {
    return {
           type: GET_TRANSACTION_BY_ID,
           payload: undefined
   }
};

// POST New (YET TO TRY)
export function postTransaction(state) {
    return (dispatch) => {
        axios.post('http://localhost:1337/api/transaction', state)
            .then(response => {
               console.log(response);
               return response;
            }).catch (e => console.error(e));
    }
};

// PUT Existing
 export function putTransaction(id) {
    return (dispatch) => {
        axios.put(`http://localhost:1337/api/transaction/${id}`)
            .then(response => {
                console.log(response);
                return response;
/*                 dispatch({
                    type: EDIT_TRANSACTION,
                    payload: response.data,
                }) */
            }).catch (e => console.error(e));
    }
};

// DELETE Existing
export function deleteTransaction(id) {
    return () => {
        axios.delete(`http://localhost:1337/api/transaction/${id}`)
            .then(response => {
                alert("Transaction deleted"); //Please enhance.
            }).catch (e => console.error(e));
    }
};

/* EXTRA?: Don't forget to implement in backend
export const POST_NEW_BALANCE = "POST_NEW_BALANCE";
export function postBalance() {
return (dispatch) => {
        axios.post(`http://localhost:1337/api/${otherName}`)
            .then(response => {
                dispatch({
                    type: POST_NEW_BALANCE,
                    payload: response.data,
                })
            }).catch(e => console.error(e));
    }
}; */