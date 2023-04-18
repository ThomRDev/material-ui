import { Header } from "./app/shared";
import { Outlet } from "react-router-dom";

export const GitIssuesApp = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
