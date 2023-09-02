import React from 'react';
import {Link} from 'react-router-dom';

import { GoPlusCircle } from "react-icons/go";
function TableHead() {
    return (
        <thead>
            <tr>
                <th title="click to remove what you have typed">Delete</th>
                <th title="Edit will be on a new screen">Edit</th>
                <th title="What is the title for your achievement(award)">Title</th>
                <th title="What day was your last award day?">Date</th>
                <th title="What is your name">Name</th>
                <th title="What placement">Placement</th>               
                <th><Link to="/CreatePage"><i><GoPlusCircle title="Add new award log"></GoPlusCircle></i></Link></th>
            </tr>
        </thead>
    );
}

export default TableHead;