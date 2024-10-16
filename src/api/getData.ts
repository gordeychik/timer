import axios from "axios";

export interface IData {
  name: string;
  price: number;
  isPopular: boolean;
  isDiscount: boolean;
}

export const getData = async (): Promise<IData[]> => {
  const response = await axios.get('https://t-pay.iqfit.app/subscribe/list-test');
  return response.data;
};