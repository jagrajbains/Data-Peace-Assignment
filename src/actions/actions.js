export const setSearchField = (text) => (
    {
        type: 'CHANGE_SEARCH_FIELD',
        payload: text
    }
);

export const setCurrentPage = (id) => ({
    type: 'CHANGE_CURRENT_PAGE',
    payload: id
});

export const setUserData = (data) => ({
    type:'SET_USER_DATA',
    payload: data
});

export const requestUsers = () => (dispatch) => {
    dispatch({ type: 'REQUEST_USERS_PENDING' });
    fetch('http://demo9197058.mockable.io/users')
        .then(response => response.json())
        .then(users => dispatch({ type: 'REQUEST_USERS_SUCCESS', payload: users }))
        .catch(error => dispatch({ type: 'REQUEST_USERS_FAILED', payload: error }))
};
