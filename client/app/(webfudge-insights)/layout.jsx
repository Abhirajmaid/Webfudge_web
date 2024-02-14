import { ToastContainer } from "react-toastify";
import "../globals.css";
import { Navbar } from "@src/components/common";

export default function InsightsLayout({ children }) {
  return (
    <>
      <ToastContainer />
      <Navbar isShowMode={false} />
      {children}
    </>
  );
}
