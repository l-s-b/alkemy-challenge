import { GET_BALANCE,
    GET_ALL_TRANSACTIONS,
    GET_TRANSACTION_BY_ID, // eslint-disable-next-line
    POST_NEW_TRANSACTION, // eslint-disable-next-line
    EDIT_TRANSACTION, // eslint-disable-next-line
 } from './actions';
const initialState = {
    balance: undefined,
    transactionList: [],
    transactionByID: undefined,
    transactionPost: {
        type: "",
        item: "",
        amount: 0.0,
        date: "",
        category: ""
    },
    transactionEdit: undefined,
};

function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_BALANCE: {
            return {
                ...state,
                balance: action.payload
            }
        }
        case GET_ALL_TRANSACTIONS: {
            return {
                ...state,
                transactionList: action.payload
            }
        }

        case GET_TRANSACTION_BY_ID: {
            return {
                ...state,
                transactionByID: action.payload
            }
        }

        case EDIT_TRANSACTION: {
            return {
                ...state,
                transactionEdit: action.payload
            }
        }

         default: { return state; }
    }
}

export default reducer;