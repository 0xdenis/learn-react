import { Outlet } from "react-router-dom";

function CreateExpense() {
  return (
    <>
      <Outlet />
      <div>CreateExpense</div>
    </>
  );
}

export default CreateExpense;
