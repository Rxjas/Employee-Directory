import React from 'react';
import Table from 'react-bootstrap/Table';

function Directory (props){

    let employees = props.employees;
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(person => (
                        <tr key= {person.id}>
                            <td>{person.name}</td>
                            <td>{person.title}</td>
                            <td>{person.email}</td>
                            <td>{person.id}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>//end of whole div
    );
}

export default Directory;