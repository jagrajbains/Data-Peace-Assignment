import React from 'react';
import UserTable from './UserTable';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import Pagination from './Pagination';
import { setSearchField, requestUsers, setCurrentPage } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchUsers.searchField,
        users: state.requestUsers.users,
        isPending: state.requestUsers.isPending,
        error: state.requestUsers.error,
        currentPage: state.searchUsers.currentPage,
        usersPerPage: state.searchUsers.usersPerPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestUsers: () => dispatch(requestUsers()),
        onPageChange: (event) => dispatch(setCurrentPage(event.target.id))
    }
}

class UsersTablePage extends React.Component { 
    componentDidMount() {
        this.props.onRequestUsers();

    }

    render() {

        const { searchField, onSearchChange, users, isPending, currentPage, usersPerPage, onPageChange } = this.props;

        //logic to filter the users according the searchField
        const filteredUsers = users.filter((user) => {
            return user.first_name.toLowerCase().includes(searchField.toLowerCase());
        });


        //logic for displaying users
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

        //logic for displaying pageNumbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
            pageNumbers.push(i);
        };

        return isPending ?
            <h1>Loading Users</h1>
            :  (
            <div>
                <SearchBox onSearchChange={onSearchChange} />
                <UserTable data={currentUsers} />
                <Pagination onPageChange={onPageChange} pageNumbers={pageNumbers} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTablePage); 