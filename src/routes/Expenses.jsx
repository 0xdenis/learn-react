import { Outlet } from "react-router-dom";

function Expenses() {
  return (
    <>
      <div>Expenses</div>
      <Outlet />
    </>
  );
}

export default Expenses;
