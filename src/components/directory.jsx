import React from 'react';
import Table from 'react-bootstrap/Table';

function Directory (props){
    let employees = props.employees;
    return(
        <div>
                {employees.map(person => (
                    <ul key={person.id}>
                    <li>{person.name}</li>
                    <li>{person.title}</li>
                    <li>{person.email}</li>
                    <li>{person.id}</li>
                    </ul>
                    ))}
        </div>//end of whole div
    );
}

export default Directory;