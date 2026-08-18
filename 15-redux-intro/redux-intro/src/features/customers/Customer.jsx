import { useSelector } from "react-redux";

function Customer() {
  // useSelector create a subscription to the store
  const customerFullName = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customerFullName}</h2>;
}

export default Customer;
