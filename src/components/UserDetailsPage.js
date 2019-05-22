import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const UserDetailsPage = (props) => (
    <div className='userDetails'>
        <Link className='userDetails__link' to='/'>Back</Link>
        <h2>{props.user.first_name} {props.user.last_name}</h2>
        <div className='divider'>
            <p >Company</p>
            <p>{props.user.company_name}</p>
        </div>
        <div className='divider'>
            <p>City</p>
            <p>{props.user.city}</p>
        </div>
        <div className='divider'>
            <p>State</p>
            <p>{props.user.state}</p>
        </div>
        <div className='divider'>
            <p>Zip</p>
            <p>{props.user.zip}</p>
        </div>
        <div className='divider'>
            <p>Email</p>
            <p>{props.user.email}</p>
        </div>
        <div className='divider'>
            <p>Web</p>
            <p>{props.user.web}</p>
        </div>
        <div className='divider'>
            <p>Age</p>
            <p>{props.user.age}</p>
        </div>
    </div>
);

const mapStateToProps=(state) => {
    return {
        user: state.requestUsers.user
    }
}

export default connect(mapStateToProps)(UserDetailsPage);