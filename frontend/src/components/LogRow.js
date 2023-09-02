import React from 'react';
import {TiDelete, TiEdit} from 'react-icons/ti';
import { GoTrash } from "react-icons/go";
function LogRow({ award, onDelete, onEdit }) {

    return (
        <tr>
            <td><i><GoTrash onClick={() => onDelete(award._id)} title="Delete"></GoTrash> </i></td>
            <td><i><TiEdit onClick={() => onEdit(award)} title="Edit"></TiEdit></i></td>
            <td title=" what is the name of your achievement?">{award.achievement}</td>
            <td title=" what is your name?">{award.name}</td>
            <td title=" What placement?">{award.placement}</td>
            <td title=" What day was your last award day?">{award.date}</td>
            <td></td>
        </tr>

    );

}

export default LogRow;