import React from 'react';
import './Header.scss';

import { ReactComponent as Waves } from '../img/Waves.svg'

import ThemeSwitcher from '../components/ThemeSwitcher';


const Header = () => {
    return (
        <section id='Header'>
            <div className="header">
                <ThemeSwitcher />
                <div className="title">
                    {/*<h2 className="greeting">Hi !</h2>*/}
                    <h1>I'm <span className="name">Daniel Vafidis.</span></h1>
                    <h2>Front-end Developer</h2>
                </div>

                <Waves />
            </div>

        </section>
    );
};
export default Header
