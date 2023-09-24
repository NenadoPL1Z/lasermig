export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
export const API_PATH = process.env.NEXT_PUBLIC_API_PATH || "";
export const API_URL = BASE_URL + API_PATH;
export const TIMEOUT = +(process.env.NEXT_PUBLIC_TIMEOUT || 60000);

export const INITIAL_PAGE = 1;
export const PAGE_LIMIT = +(process.env.NEXT_PUBLIC_PAGE_LIMIT || 10);
