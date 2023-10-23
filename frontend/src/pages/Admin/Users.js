import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../Context/auth';
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])
    const [auth, setAuth] = useAuth();
    const getusers = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/auth/all-user",
                {
                    headers: {
                        "login-user": JSON.stringify(auth?.user),
                        "Authorization": auth?.token
                    }
                });
            setUsers(data.allusers);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getusers();
    }, [])
    return (
        <>
            <Layout title={"Dashboard - All Users"}>
                <div className="container-fluid m-3 p-3 dashboard">
                    <div className="row">
                        <div className="col-md-3">
                            <AdminMenu />
                        </div>

                        <div className="col-md-9">
                            <h4 className="text-center">All Users List</h4>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Number</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.map((p) => (
                                        <tr>
                                            <td>{p.phone}</td>
                                            <td>{p.name}</td>
                                            <td>{p.email}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

            </Layout>

        </>
    )
}

export default Users