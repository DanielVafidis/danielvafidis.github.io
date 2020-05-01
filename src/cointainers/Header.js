import React from 'react';
import './Header.scss';

import { ReactComponent as Waves } from '../img/Waves.svg'

import ThemeSwitcher from '../components/ThemeSwitcher';


const Header = () => {
    return (
        <section id='Header'>
            <div className="header">
                <ThemeSwitcher />
                <div>
                    <span className="greeting">Hi !</span>
                    <h1>I'm Daniel Vafidis.</h1>
                    <h2>I'm a Front-End Developer</h2>
                </div>

                <Waves />
            </div>

        </section>
    );
};
export default Header
