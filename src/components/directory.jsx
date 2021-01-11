import React from 'react';
import Table from 'react-bootstrap/Table';

function Directory (props){
    let employees = props.employees;

    function filter (key, order = "ascending"){
        return(function innerSort(var1, var2) {
            console.log(var1, var2);
            if (!var1.hasOwnProperty(key) || !var2.hasOwnProperty(key)){
                return 0;
            }

            const variableA = (typeof var1[key] ==="string") ? var1[key].toUpperCase() : var1[key];
            const variableB = (typeof var2[key] ==="string") ? var2[key].toUpperCase() : var2[key];

            let sorting = 0;
            if(variableA > variableB){
                sorting = 1;
            }else if (variableB > variableA){
                sorting = -1;
            }

            return(
                (order === "descending") ? (sorting * -1) : sorting
            );
            
        });
    };

    function activateSort (event){
        console.log(event.target.children)
        //Do not allow the page to redirect somewhere since it's static
        event.preventDefault();
        const 
    } 
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