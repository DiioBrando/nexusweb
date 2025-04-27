"use client";
import React, {ReactNode} from "react";
import {ClientProvider} from "@/app/providers/QueryClientProvider";
import {I18nProvider} from "@/app/providers/i18n";

export default function AppProviders({children}: ReactNode) {
    return (
        <ClientProvider>
            <I18nProvider>
                {children}
            </I18nProvider>
        </ClientProvider>
    )
}