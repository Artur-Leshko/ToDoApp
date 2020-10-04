import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faStar, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './menu.css'

export const Menu = () => {


    return(
        <ul className='menu-list'>
            <li>
                <Link to='/todoapp/'>
                    <span className='menu-title'>Меню</span>
                </Link>
            </li>
            <li>
                <Link className='menu-list__link' to='/todoapp/inbox' >
                    <FontAwesomeIcon icon={faFile} className='menu-list__icon first' />
                    <span className='menu-list__text' >Inbox</span>
                </Link>
            </li>
            <li>
                <Link className='menu-list__link' to='/todoapp/focus' >
                    <FontAwesomeIcon icon={faStar} className='menu-list__icon' />
                    <span className='menu-list__text' >Focus</span>
                </Link>
            </li>
            <li>
                <Link className='menu-list__link' to='/todoapp/projects' >
                    <FontAwesomeIcon icon={faProjectDiagram} className='menu-list__icon' />
                    <span className='menu-list__text' >Projects</span>
                </Link>
            </li>
        </ul>
    )
}
