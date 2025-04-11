import {DefaultOptions, MutationCache, QueryCache} from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
        queryCache: new QueryCache({
            onError: (error) => {
                console.log(error.message);
            }
        }),
        mutationCache: new MutationCache({
            onError: (error) => {
                console.log(error.message);
            }
        }),
    },
};