export default class searchOfRepController {
    constructor($state, ApiService) {
        "ngInject";
        this._api = ApiService;
        this._state = $state;
        this.repos = [];
        this.loading = false;
        this.params = {};
        this.searchRepos();
        this.savedIds = JSON.parse(localStorage.getItem('repos.checked')) || [];
    }

    searchRepos() {
        this.loading = true;
        this._api.getRepos(this.options).then((repos) => {
            this.repos = repos.data.items;
            this.repos.forEach(repo => repo.checked = this.savedIds.indexOf(repo.id) !== -1);
        }).finally(() => {
            this.loading = false;
        });
    }

    checkRepos(index) {
        if (this.savedIds.indexOf(this.repos[index].id) === -1) {
            this.savedIds.push(this.repos[index].id);
        } else {
            this.savedIds = this.savedIds.filter(id => id !== this.repos[index].id);
        }
        localStorage.setItem('repos.checked', JSON.stringify(this.savedIds));
        this.repos[index].checked = !this.repos[index].checked;
    }
}

