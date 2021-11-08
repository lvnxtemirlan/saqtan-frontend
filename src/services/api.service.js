class APIService {
    constructor () {
        this.HOST = process.env.REACT_APP_API_HOST;
    }

    async get(path, query_params=null) {
        var queryParamsString = "";

        if (query_params) {
            Object.keys(query_params).forEach(key => {
                var val = query_params[key];

                if (queryParamsString.length == 0) {
                    queryParamsString += `${key}=${val}`;
                } else {
                    queryParamsString += `&${key}=${val}`;
                }
            });
        }

        return await fetch(`${this.HOST}${path}?${queryParamsString}`, {
            method: "GET",
        });
    }
}

export default APIService;