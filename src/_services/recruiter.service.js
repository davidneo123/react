import config from 'config';

export const recruiterService = {
    getUsers
};

const requestOptions = {
    method: 'GET',
};

function getUsers(q) {
    console.log(q)
    return fetch(`${config.usersUrl}/users?q=${q}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}