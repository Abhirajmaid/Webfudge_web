"use client";

import React, { createContext, useContext, useState } from "react";

const LeadFormContext = createContext();

export const LeadFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <LeadFormContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </LeadFormContext.Provider>
  );
};

export const useLeadForm = () => {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within LeadFormProvider");
  }
  return context;
};


