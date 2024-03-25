// NOTE: Эндпоинты для мокого сервера и бека, который должны были написать.
// (часть одинаковые, cхемы могут не соответствовать);

const BASE_URL = 'http://localhost:3001/';
export const GET_CITIES_URL = `${BASE_URL}/cities`;
export const GET_CATEGORIES_URL = `${BASE_URL}/all-specializations`;
export const GET_CATEGORY_URL = `${BASE_URL}/specialization/`;
export const POST_VACANCY = `${BASE_URL}/application/vacancy`;
export const POST_CONDITIONS = `${BASE_URL}/application/conditions`;
export const POST_PAYMENT = `${BASE_URL}/application/payment`;
export const POST_ADDITION = `${BASE_URL}application/additionally`;
export const POST_FILE = `${BASE_URL}/file`;

// const BASE_URL = "http://localhost:8001/api/v1";
// export const GET_CITIES_URL = `${BASE_URL}/base/cities`;
// export const GET_CATEGORIES_URL = `${BASE_URL}/base/all-specializations`;
// export const GET_CATEGORY_URL = `${BASE_URL}/base/specialization/`;
