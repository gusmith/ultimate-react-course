import { createStore } from "redux"; // it is deprecated in favour to redux toolkit, but can be useful for older application

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      // Redux recommend returning the initial state.
      return state;
  }
}

const store = createStore(reducer);

// Convention with Redux: action creators
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, loanPurpose: loanPurpose },
  };
}
function payLoan() {
  return {
    type: "account/payLoan",
  };
}
