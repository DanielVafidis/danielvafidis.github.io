import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

import './Projects.scss';

import { ReactComponent as GhLogo } from '../icons/github.svg'
import WaveLoader from '../components/WaveLoader';

const Projects = () => {

    const URL = 'https://api.github.com/users/danielvafidis/repos?sort=updated&page=1&per_page=5';
    const [data, setData] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(URL);
            setData(result.data);
        };
        fetchData();
    }, [URL]);
    /*
    useEffect(() => {
        fetch(URL)
            .then((results) => results.json())
            .then((resp) => {
                setData(resp);
            })
            .catch(err => console.error(err));
    }, [URL]);*/


    if (data.length === 5) {
        setData([...data, {
            name: "More on Github.com",
            html_url: "https://github.com/DanielVafidis?tab=repositories",
            updated_at: false
        }]);
    }

    return (
        <section id='projects' >
            <h2>My latest <span className="name">projects</span></h2>
            <div className='projects-list'>
                {(data.length > 0)
                    ? (data.map((data, index) => (
                        <a href={data.html_url} className="item" key={index}>
                            <div className='card' >
                                <div className="testlogo"><GhLogo /></div>
                                <div className="projectName"><p className="bold">{data.name}</p></div>
                                <div className="projectDate"><p className="date">{(data.updated_at) ? moment(data.updated_at).fromNow() : "..."}</p></div>
                            </div>
                        </a>
                    ))) : <WaveLoader />}
            </div>
        </section >
    );
};
export default Projects;