import MainRoute from "@pages/MainRoute";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = ({}) => {
  return (
    <>
      <MainRoute />
      <ToastContainer />
    </>
  );
};
export default App;
