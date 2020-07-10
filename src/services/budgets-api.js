const BASE_URL = '/api/budgets/';

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}

export function create(budget) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(budget)
     }, {mode: "cors"})
     .then(res => res.json());
}




