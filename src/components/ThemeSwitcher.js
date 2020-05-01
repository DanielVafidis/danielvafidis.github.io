import React from 'react'
import './ThemeSwitcher.scss';


let mountElement = document.querySelector('body');
const colors = window.matchMedia("(prefers-color-scheme: light)");
(colors.matches) ? mountElement.classList.toggle('light') : mountElement.classList.toggle('dark');

function onChange() {
    let mountElement = document.querySelector('body');
    mountElement.classList.toggle('dark');
    mountElement.classList.toggle('light');
}

const ThemeSwitcher = () => {
    return (
        <div className="Switch">
            <div className="toggleWrapper">
                <input type="checkbox" className="dn" id="dn" onChange={onChange} defaultChecked={!colors.matches} />
                <label htmlFor="dn" className="toggle">
                    <span className="toggle__handler">
                        <span className="crater crater--1"></span>
                        <span className="crater crater--2"></span>
                        <span className="crater crater--3"></span>
                    </span>
                    <span className="star star--1"></span>
                    <span className="star star--2"></span>
                    <span className="star star--3"></span>
                    <span className="star star--4"></span>
                    <span className="star star--5"></span>
                    <span className="star star--6"></span>
                </label>
            </div>
        </div>

    )
}

export default ThemeSwitcher;
