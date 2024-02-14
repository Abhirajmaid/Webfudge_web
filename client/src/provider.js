"use client";
import { ThemeProvider } from "next-themes";
import { ToastContextProvider } from "@src/context/ToastContext";

export function Providers({ children }) {
    return (
        <ThemeProvider attribute="class">
            <ToastContextProvider >
                {children}
            </ToastContextProvider>
        </ThemeProvider>
    )
}