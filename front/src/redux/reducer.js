import { GET_BALANCE,
    GET_ALL_TRANSACTIONS,
    GET_TRANSACTION_BY_ID, // eslint-disable-next-line
    GET_TO_EDIT, // eslint-disable-next-line
    POST_NEW_TRANSACTION, // eslint-disable-next-line
    EDIT_TRANSACTION,
 } from './actions';
const initialState = {
    balance: null,
    transactionList: [],
    transactionByID: null,
    transactiontoEdit: {},
    transactionPost: {
        type: "",
        item: "",
        amount: 0.0,
        date: "",
        category: ""
    },
    transactionEdit: null,
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

        case GET_TO_EDIT: {
            return {
                ...state,
                transactionToEdit: action.payload
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