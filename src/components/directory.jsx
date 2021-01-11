import React from 'react';
import Table from 'react-bootstrap/Table';

function Directory (props){

    let employees = props.employees;
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>Employee ID</th>

                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Phone #</th>
                        <th>Date of Birth</th>

                    </tr>
                </thead>
                <tbody>
                    {employees.map(per => (
                        <tr key= {per.id}>
                            <td>{per.id}</td>
                            <td>{per.name.first}</td>
                            <td>{per.name.last}</td>
                            <td>{per.email}</td>
                            <td>{per.phone}</td>
                            <td>{per.dob.month}, {per.dob.day}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>//end of whole div
    );
}

export default Directory;