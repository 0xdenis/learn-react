import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateExpense from "./routes/CreateExpense";
import Expenses from "./routes/Expenses";
import Expense from "./routes/Expense";
import Header from "./components/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Expenses />,
          children: [
            {
              path: "/create",
              element: <CreateExpense />,
            },
            {
              path: "/expense",
              element: <Expense />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
