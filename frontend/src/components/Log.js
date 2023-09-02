import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { GoTrash, GoFileDiff } from "react-icons/go";



function Award({ award, onEdit, onDelete }) {
    return (
        <tr>
            <td>{award.title}</td>
            <td>{award.date}</td>
            <td>{award.name}</td>
            <td>{award.placement}</td>
            <td><GoTrash onClick={() => onDelete(award._id)} /></td>
            <td><GoFileDiff onClick={() => onEdit(award)} /></td>
        </tr>
    );
}

export default Award;