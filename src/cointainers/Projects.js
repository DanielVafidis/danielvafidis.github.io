import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import './Projects.scss';

import { ReactComponent as GhLogo } from '../icons/github.svg'
import WaveLoader from '../components/WaveLoader';

const Projects = () => {

    const URL = 'https://api.github.com/users/danielvafidis/repos?sort=updated_at&page=1&per_page=5';
    const [data, setData] = useState({});
    const [ready, setReady] = useState(false);



    useEffect(() => {
        fetch(URL)
            .then((results) => results.json())
            .then((resp) => {
                setData(resp);

            })
            .then(() => {
            });
    }, [URL]);

    if (Object.keys(data).length === 5) {
        setData({
            ...data.push({
                name: "More on Github", html_url: "https://github.com/DanielVafidis?tab=repositories", updated_at: false
            })
        });
        setReady(!ready);
    }

    return (
        <section id='projects' >
            <h2>My latest projects</h2>
            <div className='projects-list'>
                {(Object.keys(data).length > 4)
                    ? (data.map((data, index) => (
                        <a href={data.html_url} className="item">
                            <div className='card' >
                                <div className="testlogo"><GhLogo /></div>
                                <div className="projectName"><p>{data.name}</p></div>
                                <div classNam="projectDate"><p>{(data.updated_at) ? moment(data.updated_at).fromNow() : "..."}</p></div>
                            </div>
                        </a>
                    ))) : <WaveLoader />}
            </div>
        </section >
    );
};
export default Projects;