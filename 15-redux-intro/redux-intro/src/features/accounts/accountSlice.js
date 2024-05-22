import { createSlice } from "@reduxjs/toolkit";

// Slice, describing it is a slice of the whole redux state

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      // In Redux toolkit, we can mutate the state, but under the hood, redux toolkit is making it immutable and we do not return anything
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      // Prepare is ran before the reducer, to prepare the action object if we want multiple arguments in the action creator.
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            loanPurpose: purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.loanPurpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
