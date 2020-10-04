import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, UserActionsCreator } from '../user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './userDisplay.css';

export const UserDisplay = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    return (
        <div className='user-display'>
            <span className='user-display__welcome'>Привет, {user.displayName || user.email}!</span>
            <FontAwesomeIcon icon={faEdit} className='user-display__edit' />
            <button className='user-display__logout' onClick={() => dispatch(UserActionsCreator.logout())}>Выйти</button>
        </div>
    )
}
