import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Clients extends Component {
    render() {
        const clients = [
            {
                id: "5467487",
                firstName: "Kevin",
                lastName: "Johnson",
                email: "kevin@gmail.com",
                phone: "222-222-2222",
                balance: "30",
            },
            {
                id: "q92929",
                firstName: "Bob",
                lastName: "Johnson",
                email: "sadfs@gmail.com",
                phone: "222-456-2222",
                balance: "300.13",
            },
        ];

        if (clients) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                {" "}
                                <i className="fas fa-users"></i> Clients{" "}
                            </h2>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>
                                        {client.firstName} {client.lastName}
                                    </td>
                                    <td>{client.email}</td>
                                    <td>
                                        {parseFloat(client.balance).toFixed(2)}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/client/${client.id}`}
                                            className="btn btn-secondary btn-sm"
                                        >
                                            {" "}
                                            <i className="fas fa-arrow-circle-right"></i>{" "}
                                            Details{" "}
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <h1>Loading...</h1>;
        }
    }
}
