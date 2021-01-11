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
                    {employees.map(per => (
                        <tr key= {per.id}>
                            <td>{per.name}</td>
                            <td>{per.title}</td>
                            <td>{per.email}</td>
                            <td>{per.id}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>//end of whole div
    );
}

export default Directory;