import React from 'react';
import cls from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={cls.nav}>
            <ul>
                <li className={`${cls.item} ${cls.active}`}><a href='src/components#'>Profile</a></li>
                <li className={cls.item}><a href='src/components#'>Messages</a></li>
                <li className={cls.item}><a href='src/components#'>News</a></li>
                <li className={cls.item}><a href='src/components#'>Music</a></li>
                <li className={cls.item}><a href='src/components#'>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav