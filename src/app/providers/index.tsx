"use client";
import React, {ReactNode} from "react";
import {ClientProvider} from "@/app/providers/QueryClientProvider";

export default function AppProviders({children}: ReactNode) {
    return <ClientProvider>{children}</ClientProvider>
}