import React from 'react';
import { Projects } from './Projects';
import { MainImg } from '../style';
import projectJpg from '../../public/images/project.jpg';


export const Project = () => <>
    <MainImg src={projectJpg} />
    <Projects />
</>;
