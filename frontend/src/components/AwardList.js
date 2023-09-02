import React from 'react';
import Log from './Log';
import {Link} from "react-router-dom";
import { GoTrash, GoPlusCircle, GoFileDiff } from "react-icons/go";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function AwardList({ award, onDelete, onEdit }) {
    return (
        <table id="award">
            <caption>Congratulations</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Placement</th>
                    <td><GoTrash onClick={() => onDelete(award._id)} /></td>
                    <td><GoFileDiff onClick={() => onEdit(award)} /></td>
                    <th><Link to="/CreatePage"><i><GoPlusCircle title="Add new award log"></GoPlusCircle></i></Link></th>
                </tr>
            </thead>
            <tbody>
                {award.map((award, i) => 
                    <Log 
                        award={award} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default AwardList;
