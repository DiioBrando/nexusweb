import {ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {queryConfig} from "@/app/providers/QueryClientProvider/config";

export function ClientProvider({ children }: ReactNode) {
    const [queryClient] = useState(() => new QueryClient({defaultOptions: queryConfig}));

    return(
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}

export { QueryClient };