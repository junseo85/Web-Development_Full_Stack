import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopicsPage from '../pages/TopicsPage.js';
import { FaHome} from 'react-icons/fa';

function HomePage() {
    return (
        <>
        <h2><i><FaHome /></i>Welcome to my Web Dev Portfolio</h2>
        <TopicsPage />
        <article id="">
            <h3>About this app</h3>
            <p>My career goals are successfully switching my career to computer related field.</p>
            <p>Technologies that used in the website</p>
            <ol>Visual Studio program is used to build HTML files as well as React, JavaScript, Express and MongoDB.</ol>
            <ol>The React framework created a foundation for building a website</ol>
            <ol>Framework that i created using html was successfully translated using JavaScript.</ol>
            <ol>Through using MongoDB application can perform CRUD-Create,Read,Update,Delete.</ol>
        </article>
        </>
    );
}

export default HomePage;