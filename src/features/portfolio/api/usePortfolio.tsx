import {useQuery} from "@tanstack/react-query";
import {getPortfolio} from "@/features/portfolio/api/getPortfolio";

export const usePortfolio = () => {
    return useQuery({
        queryFn: getPortfolio,
        queryKey: ['Portfolio'],
    });
}