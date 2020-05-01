import React from 'react'

import './Tools.scss';

import { ReactComponent as VisualStudioCode } from '../icons/visual-studio-code.svg';
import { ReactComponent as Html5 } from '../icons/html5.svg';
import { ReactComponent as Css3 } from '../icons/css3.svg';
import { ReactComponent as Js } from '../icons/js-square.svg';
import { ReactComponent as Reactjs } from '../icons/react.svg';
import { ReactComponent as NodeJs } from '../icons/node-js.svg';
import { ReactComponent as Bootstrap } from '../icons/bootstrap.svg';
import { ReactComponent as Git } from '../icons/git.svg';
import { ReactComponent as Npm } from '../icons/npm.svg';
import { ReactComponent as Yarn } from '../icons/yarn.svg';
import { ReactComponent as Php } from '../icons/php.svg';
import { ReactComponent as Symfony } from '../icons/symfony.svg';

const Tools = () => {
    return (
        <section id="tools">
            <h2>My tools</h2>
            <div className="list">
                <div className="item"><VisualStudioCode /></div>
                <div className="item"><Html5 /></div>
                <div className="item"><Css3 /></div>
                <div className="item"><Js /></div>
                <div className="item"><Reactjs /></div>
                <div className="item"><NodeJs /></div>
                <div className="item"><Bootstrap /></div>
                <div className="item"><Git /></div>
                <div className="item"><Npm /></div>
                <div className="item"><Yarn /></div>
                <div className="item"><Php /></div>
                <div className="item"><Symfony /></div>
            </div>
        </section>
    )
}
export default Tools;