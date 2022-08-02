import React from 'react';
import { Projects } from './Projects';
import { MainImg } from '../style';
import home0Jpg from '../../public/images/home0.jpg';


export const Welcome = () => <>
    <MainImg src={home0Jpg} />
    <h1>WELCOME TO TAIHE CONSTRUCTION LTD.</h1>
    <h3>Designs, Develops and Delivers vibrant communities</h3>
    <p>
        Our mission is to design, develop and build vibrant communities where life is enjoyed in an
        atmosphere of wellness and healthy activity, underscored by a sense of luxury. Our residents
        appreciate the conveniences that come with living in or near urban neighborhoods that are
        framed by unique local settings. At the same time, they want to leave behind the humdrum burdens
        of day-to-day living, in favour of a lifestyle that's good for the body, mind and soul.
    </p>
    <br />
    <h1>PROJECTS</h1>
    <Projects />
</>;
