const API = 'https://api.coingecko.com/api/v3';

export const STATUS_UPDATES = `${API}/status_updates`;
export const CRyPTO_LIST = `${API}/coins/markets?vs_currency=gbp`;
export const getCryptoUpdateUrl = (id) =>
  `${API}/simple/price?ids=${id}&vs_currencies=gbp&include_last_updated_at=true`;
