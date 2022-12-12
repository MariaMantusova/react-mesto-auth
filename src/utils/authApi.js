class AuthApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
}

const authApiOption = {
    url: 'https://auth.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json',
    },
}

export const authApi = new AuthApi(authApiOption);