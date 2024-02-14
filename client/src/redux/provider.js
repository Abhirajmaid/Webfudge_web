"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { ToastContextProvider } from "@src/context/ToastContext";

export function Providers({ children }) {
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class">
                <ToastContextProvider >
                    {children}
                </ToastContextProvider>
            </ThemeProvider>
        </Provider>
    )
}