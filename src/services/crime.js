import APIService from "./api";


const API_SERVICE = new APIService();

const getCrimes = (pageSize=6) => {
    return API_SERVICE.get("/crimes/list/", {page_size: pageSize});
}

const getCrimesByYears = () => {
    return API_SERVICE.get("/crimes/mixin/", {type: "AMOUNT_BY_YEARS"});
}

const getCrimesByYearsPeriods = (year=null) => {
    return API_SERVICE.get("/crimes/mixin/", {type: "AMOUNT_BY_YEARS_PERIODS", year: year});
}

const getCrimesByCities = year => {
    return API_SERVICE.get("/crimes/mixin/", {type: "AMOUNT_BY_CITIES", year: year});
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

const getEvents = (page, pageLink=null, pageSize=6) => {
    if (!pageLink) {
        return API_SERVICE.get("/crimes/list/", {page_size: pageSize, page: page});
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