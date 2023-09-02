import {React, useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import { GoTrophy} from "react-icons/go";
import LogTable from '../components/LogTable';

import AwardList from '../components/AwardList';

// Change the function names and links
// to fit your portfolio topic.

function LogPage() {

    const navigate = useNavigate();
    const [award, setAward] = useState([]);
    const loadAward = async () => {
        const response = await fetch('/awards');
        const data = await response.json();
        setAward(data);
    }
    //UPDATE award log
    const onEditAward = async updateaward => {
        setAward(updateaward);
        navigate("/EditPage");
    }
    //DELETE award log
    const onDeleteAward = async id => {
        const response = await fetch(`/awards/${id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/awards');
            const data = await getResponse.json();
            setAward(data);
        } else {
            console.error('The row for id:${id} failed to delete due to (status code) = ${response.status}).')
        }
    }
    useEffect(() => {
        loadAward();
    }, []);
    
    return (
    <>
        <h2><i><GoTrophy /></i>Studio News</h2>
        <article>
            <p> Click the add, delete, or edit icons to post your achievement.</p>
            <AwardList
                award={award}
                onDelete={onDeleteAward}
                onEdit={onEditAward}
            />    
        </article>
    </>
  );
}

export default LogPage;
