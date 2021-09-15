// import axios from 'axios';

import axios from "axios";

export const getCompaniesApi = async () => {
  const url = 'https://financialmodelingprep.com/api/v3/etf/list?apikey=e734135f188af5fa67f307bb91ede5c9';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json());
  return response;
};

export const getCompanyDeatilsApi=async(name)=>{
  const url = "https://financialmodelingprep.com/api/v3/profile/"+name+"?apikey=e734135f188af5fa67f307bb91ede5c9"
  const response= axios.get(url)
  const res=(await response).data
  res
}

export default getCompaniesApi;
