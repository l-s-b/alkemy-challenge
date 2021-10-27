import { GET_BALANCE,
    GET_ALL_TRANSACTIONS,
    GET_TRANSACTION_BY_ID,
    POST_NEW_TRANSACTION,
    EDIT_TRANSACTION,
    DELETE_TRANSACTION
 } from './actions';
const initialState = {
    balance: undefined,
    transactionList: undefined,
    transactionByID: undefined,
    transactionPost: {
        type: "",
        item: "",
        amount: 0.0,
        date: "",
        category: ""
    }
};

function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_BALANCE: {
            return {
                ...state,
                balance: action.payload // FILTER HERE
            }
        }
        case GET_ALL_TRANSACTIONS: {
            return {
                ...state,
                transactionList: action.payload // FILTER HERE
            }
        }

        case GET_TRANSACTION_BY_ID: {
            return {
                ...state,
                transactionByID: action.payload
            }
        }

         default: { return state; }
    }
}

export default reducer;