import React from 'react';
import Table from 'react-bootstrap/Table';

function Directory (props){

    let employees = props.employees;
    return(
        <div>
            <form >
                <label>I want to sort by...</label>
                <select name="keys" id="keys">
                    <option value="dob.date">Date of Birth</option>
                    <option value="name.first">FirstName</option>
                    <option value="name.last">LastName</option>
                </select>
                <select>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                    <button type="submit">Filter!</button>
            </form>
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