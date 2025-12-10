"use client";
import { ThemeProvider } from "next-themes";
import { ToastContextProvider } from "@src/context/ToastContext";
import { LeadFormProvider } from "@src/context/LeadFormContext";

export function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
            <ToastContextProvider>
                <LeadFormProvider>
                    {children}
                </LeadFormProvider>
            </ToastContextProvider>
        </ThemeProvider>
    )
}