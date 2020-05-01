import React from 'react'

import './Contact.scss'

import { ReactComponent as Github } from '../icons/github-square.svg';
import { ReactComponent as Hackerrank } from '../icons/hackerrank.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as StackOverflow } from '../icons/stack-overflow.svg';
import { ReactComponent as Mail } from '../icons/paper-plane-solid.svg';


const Contact = () => {
    return (
        <section id="contact">
            <div className="item"><a href="mailto:danielvafidis@gmail.com" title="Contact me"><Mail /></a></div>
            <div className="item"><a href="https://www.linkedin.com/in/danielvafidis/" title="Linkedin"><Linkedin /></a></div>
            <div className="item"><a href="https://github.com/DanielVafidis/" title="Github"><Github /></a></div>
            <div className="item"><a href="https://www.hackerrank.com/DanielVafidis" title="Hackerrank"><Hackerrank /></a></div>
            <div className="item"><a href="https://stackoverflow.com/users/10883301/daniel-vafidis/" title="Stack Overflow"><StackOverflow /></a></div>
        </section>
    )
}

export default Contact
