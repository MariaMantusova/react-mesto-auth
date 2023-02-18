class Api {
    constructor(config) {
        this._url = config.url;
        this._token = '';
        this._header = config.headers;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                Authorization: this.getAuthHeader()
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                Authorization: this.getAuthHeader()
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    changeUserInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthHeader()
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    saveNewCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthHeader()
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthHeader()
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthHeader()
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthHeader()
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    changeProfilePhoto(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthHeader()
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    getAuthHeader() {
        if (this._token !== '') {
            return `Bearer ${this._token}`
        }
        if (localStorage.getItem("jwt") !== '') {
            this._token = localStorage.getItem("jwt")
            return `Bearer ${this._token}`
        }
        return ''
    }
}

const apiOption = {
    url: 'https://api.project.mymesto.nomoredomainsclub.ru',
    headers: {
        'Content-Type': 'application/json',
    },
}

export const api = new Api(apiOption);
