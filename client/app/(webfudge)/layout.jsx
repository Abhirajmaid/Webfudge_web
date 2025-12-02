"use client";
import { useState } from "react";
import "../globals.css";
import {
  AnniversaryMarquee,
  Footer,
  LoadingScreen,
  Navbar,
} from "@/src/components/common";
import LeadFormModal from "@/src/components/common/LeadFormModal";
import { useLeadForm } from "@/src/context/LeadFormContext";

export default function WebfudgeLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const { isOpen, closeModal } = useLeadForm();

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <AnniversaryMarquee />
          <Navbar isShowMode={true} />
          {children}
          <Footer />
          <LeadFormModal visible={isOpen} onClose={closeModal} />
        </>
      )}
    </>
  );
}
