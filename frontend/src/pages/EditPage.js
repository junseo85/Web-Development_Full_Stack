import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TableHead from '../components/TableHead.js';
import {FaRunning} from 'react-icons/fa';

//EDIT
export const EditPage = ({awardToEdit}) => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [placement, setPlacement] = useState();
    

    const navigate = useNavigate();

    const editAward = async () => {
        const newAward = { title, date, name, placement };

        const response = await fetch('/awards', {
                method: 'POST',
                body: JSON.stringify(newAward),
                headers: {
                    'Content-Type': 'application/json',
                },
        });
        if(response.status === 201){
            
            alert("Thank you for sharing your success!");
        } else{
            
            alert('That input failed, due to missing data:(status code = ${response.status}');
        }
        navigate("/LogPage");
    };
    return (
        <>
        <h2><i><FaRunning /></i>Studio News</h2>
        <article>
        <p>Let us know what award you received.</p>
        <table id="awards">
            <caption>Congratulation</caption>
            <TableHead />
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td><label for="title" >
                        <input type="text" value={title} id="title" name="title"
                                onChange={e => setTitle(e.target.value)} 
                        />
                        </label>
                    </td>
                    <td><label for="date" >
                        <input
                            type="date"
                            value={date}
                            id="date"
                            name="date"
                            onChange={e => setDate(e.target.value)} 
                            pattern="\d{2}-\d{2}-\d{2}"
                            />
                        </label></td>
                    <td><label for="name" >
                        <input
                            type="text"
                            value={name}
                            id="name"
                            name="name"
                            onChange={e => setName(e.target.value)} />
                        </label></td>
                    <td><label for="placement" >
                        <input
                            type="text"
                            value={placement}
                            id="placement"
                            name="placement"
                            onChange={e => setPlacement(e.target.value)} />
                        </label></td>
                        
                        <td><label for="submit"><button class="submit" onClick={editAward} id="submit">Save</button></label></td>
                </tr>
            </tbody>
        </table>
        </article>
        </>
    );
}

export default EditPage;