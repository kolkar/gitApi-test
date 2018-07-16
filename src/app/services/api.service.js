export default class ApiService {
    constructor($q, $http) {
        this._http = $http;
    }

    getRepos(params) {
        // return this._http.get('https://api.github.com/search/repositories?q=stars%3E0', params);
        return this._http.get('https://api.github.com/search/repositories', {params: {q: params}});
    }
}