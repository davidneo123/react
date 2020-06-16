import config from 'config';

export const recruiterService = {
    getCandidates
};

const requestOptions = {
    method: 'GET',
};

function getCandidates() {
    return fetch(`${config.usersUrl}`, requestOptions)
    .then(handleResponse)
    // .then(res=>q?res.filter(data => data.id % 2 !== 0):res.filter(data => data.id % 2 === 0));
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
    })
}