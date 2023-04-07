import React from 'react';
import cls from './Header.module.css'

const Header = () => {
    return (
        <header className={cls.header}>
            <img src='https://static.rfstat.com/logo-presets/913/thumbnail_12c5526117ca_2x.webp' alt='logo' className={cls.logo}/>
        </header>
    );
}

export default Header