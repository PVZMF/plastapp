import { createBrowserRouter } from "react-router-dom";

const DashboardRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          ),
        },
        {
          path: "/table",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Table />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          path: "/login",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  
  export default DashboardRoutes;
  