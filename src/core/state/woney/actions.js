export const WONEY_REQUEST = 'WONEY_REQUEST';

export const WONEY_UPDATE_DATA = 'WONEY_UPDATE_DATA';

export const WONEY_REQUEST_REQUEST = 'WONEY_REQUEST_REQUEST';
export const WONEY_REQUEST_SUCCESS = 'WONEY_REQUEST_SUCCESS';
export const WONEY_REQUEST_FAILURE = 'WONEY_REQUEST_FAILURE';

export const woneyUpdateData = (data) => ({
  type: WONEY_UPDATE_DATA,
  payload: data,
});

export const woneyRequest = ({ surname, email, eth_wallet, ticket }) => ({
  type: WONEY_REQUEST,
  payload: { surname, email, eth_wallet, ticket },
});
