export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = '/auth';
export const PRODUCT_ROUTES = '/productQuery'


export const SIGNUP_ROUTES = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTES = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `${AUTH_ROUTES}/userInfo`;
export const ADDRESS_ROUTES = `${AUTH_ROUTES}/userAddress`;
export const DELETE_TOKEN = `${AUTH_ROUTES}/deletetoken`;
export const PRODUCT_SHOW = `${PRODUCT_ROUTES}/product`;
export const PLACED_ITEM_ROUTES = `${AUTH_ROUTES}/orderPlaced`;