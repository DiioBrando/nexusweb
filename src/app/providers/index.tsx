"use client";
import React, {ReactNode, Suspense, useEffect, useState} from "react";
import {ClientProvider} from "@/app/providers/QueryClientProvider";
import {I18nProvider} from "@/app/providers/i18n";

export default function AppProviders({children}: { children: ReactNode }) {
    return (
        <ClientProvider>
            <I18nProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <ClientBoundary>
                        {children}
                    </ClientBoundary>
                </Suspense>
            </I18nProvider>
        </ClientProvider>
    )
}

export function ClientBoundary({ children }: { children: ReactNode }) {
    const [isLoadingClient, setLoadingClient] = useState<boolean>(false);

    useEffect(() => {
        setLoadingClient(true);
    }, []);

    if(!isLoadingClient) {
        return <div>Loading...</div>
    }
    
    return children;
}