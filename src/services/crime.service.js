import APIService from "./api.service";


const API_SERVICE = new APIService();

const getCrimes = () => {
    return API_SERVICE.get("/crimes/list/");
}

const getCrimesByYears = () => {
    return API_SERVICE.get("/crimes/mixin/", {"type": "AMOUNT_BY_YEARS"})
}

const getCrimesByYearsPeriods = () => {
    return API_SERVICE.get("/crimes/mixin/", {"type": "AMOUNT_BY_YEARS_PERIODS"})
}

const getCrimesByCities = () => {
    return API_SERVICE.get("/crimes/mixin/", {"type": "AMOUNT_BY_CITIES"})
}

const getCrimesByYearsCities = () => {
    return API_SERVICE.get("/crimes/mixin/", {"type": "AMOUNT_BY_YEARS_CITIES"})
}

export {
    getCrimes, 
    getCrimesByYears, 
    getCrimesByYearsPeriods,
    getCrimesByCities,
    getCrimesByYearsCities
};