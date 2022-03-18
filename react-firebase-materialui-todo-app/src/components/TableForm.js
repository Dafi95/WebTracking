import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {} from '../auth/config';

export default function TableForm() {

    const [noOfRows, setNoOfRows] = useState(1);
    return (
        <div className="tableIP">
            <h1 className="underTableIP">Tabela adresów IP</h1>
            <table class="table table-hover table-bordered p-5">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Adres IP</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {[...Array(noOfRows)].map((elementInArray, index) => {

                    return (
                        <tr>
                            <th scope="row">{index}</th>
                            <td><input type={<textarea name="WWW" id="" cols="30" rows="10"></textarea>}/> </td>
                            <td>ON-LINE</td>
                        </tr>
                    );
                })}

                </tbody>
            </table>
            <button type="button" className="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add</button>
            <button type="button" className="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button>
            <button type="submit" className="btn-save" onClick={() => console.log("test")
            }>Save</button>
        </div>
    );
};