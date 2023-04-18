import { createBrowserRouter, Navigate } from "react-router-dom";
import { GitIssuesApp } from "../../GitIssuesApp";
import { IssuesView } from "../issues/views/IssuesView";
import { IssueView } from "../issues/views/IssueView";
export const router = createBrowserRouter([
  {
    path: "/issues",
    element: <GitIssuesApp />,
    children: [
      {
        path: "list",
        element: <IssuesView />,
      },
      {
        path: "issue/:id",
        element: <IssueView />,
      },
      {
        path: "*",
        element: <Navigate to={"list"} />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to={"issues/list"} />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
