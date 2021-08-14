import { requestBody } from '../models/interfaces';

const API_DOMAIN = 'https://asterix-dev.concular.com';

export async function getAllProducts(requestData: requestBody) {
  const response = await fetch(`${API_DOMAIN}/material-service/marketplace/mp`,{
    method:'POST',
    body: 
      JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch products.');
  }

  return data;
}