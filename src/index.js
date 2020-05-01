import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'destyle.css';
import './index.scss';

import Header from './cointainers/Header';
import Tools from './cointainers/Tools';
import Projects from './cointainers/Projects';
import Contact from './cointainers/Contact';
import Footer from './cointainers/Footer';



ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Tools />
        <Projects />
        <Contact />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
