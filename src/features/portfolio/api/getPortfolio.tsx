import {api} from "@/shared/lib/api";
import {IPortfolioProps} from "@/features/portfolio/entities/IPortfolioProps";

export const getPortfolio = async () => await api.get<IPortfolioProps[]>('/get/portfolio');