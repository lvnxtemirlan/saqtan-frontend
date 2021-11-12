import APIService from "./api";


const API_SERVICE = new APIService();

const getCrimes = () => {
    return API_SERVICE.get("/crimes/list/");
}

const getCrimesByYears = () => {
    return API_SERVICE.get("/crimes/mixin/", {type: "AMOUNT_BY_YEARS"});
}

const getCrimesByYearsPeriods = () => {
    return API_SERVICE.get("/crimes/mixin/", {type: "AMOUNT_BY_YEARS_PERIODS"});
}

const getCrimesByCities = () => {
    return API_SERVICE.get("/crimes/mixin/", {type: "AMOUNT_BY_CITIES"});
}

const getCrimesByYearsCities = () => {
    return API_SERVICE.get("/crimes/mixin/", {type: "AMOUNT_BY_YEARS_CITIES"});
}

const getCities = () => {
    return API_SERVICE.get("/city/list/");
}

const searchForEvents = (city, geometry, object_id=null) => {
    if (object_id) {
        return API_SERVICE.post("/crimes/search/", {"object_id": object_id});
    }
    return API_SERVICE.post("/crimes/search/", {city: city, geometry: geometry});
}

const getEvents = (page, pageLink=null) => {
    if (!pageLink) {
        return API_SERVICE.get("/crimes/list/", {page_size: 6, page: page});
    } else {
        return API_SERVICE.get(pageLink);
    }
}

const utmToLatLng = (easting, northing) => {
    return API_SERVICE.get("/crimes/utm-to-lat-lng/", {easting: easting, northing: northing});
}

export {
    getCrimes, 
    getCrimesByYears, 
    getCrimesByYearsPeriods,
    getCrimesByCities,
    getCrimesByYearsCities,
    getCities,
    searchForEvents,
    getEvents,
    utmToLatLng,
};