import { Link } from 'react-router-dom';
import React from 'react';

export const Header = props =>
    <div className="row">
        {props.user?
            <div className='col-sm-6'><Link to="/login"><button>Logout</button></Link><strong> RECRUITER APP. Welcome {props.user.firstName}!</strong></div>:null}
        {props.user && props.user.role=='Admin'?
            <div className='col-sm-6'><Link to="/users"> <button>Manage Users</button></Link></div>:null}
    </div>
