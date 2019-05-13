const initialStateSearch = {
    searchField: '',
    currentPage: 1,
    usersPerPage: 5
}

const initialStateUsers ={
    isPending: false,
    users: [],
    error: ''
}

export const searchUsers =  (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_FIELD':
            return Object.assign({}, state, {searchField: action.payload, currentPage: 1})
        case 'CHANGE_CURRENT_PAGE':
            return Object.assign({}, state, {currentPage: action.payload})
        default:
            return state;
    }
}

export const requestUsers = (state= initialStateUsers, action = {}) => {
    switch(action.type) {
        case 'REQUEST_USERS_PENDING':
            return Object.assign({}, state, {isPending: true});
        case 'REQUEST_USERS_SUCCESS':
            return Object.assign({}, state, {users: action.payload, isPending: false});
        case 'REQUEST_USERS_FAILED':
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}

