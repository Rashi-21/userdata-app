import React, {useEffect} from "react";
import {fetchUsers} from '../app/user/userSlice'
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'

function Userlist(){
    const dispatch = useDispatch()

    const users =useSelector((state) => { return state.user})

    useEffect ( () => {
        dispatch(fetchUsers())
    }, [])


    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h3 className="mt-3">Userlist</h3>

                    {
                        users.loading && <div className="spineer-border text-primary">
                            Loading...
                        </div>
                    }

                    <div className="d-grid justify-content-start">
                        <Link to="/adduser" className="btn btn-info btn-lg mb-3">Add User</Link>
                    </div>
                    <table className="table table-bordered">
                    <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Address</th>
                    <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                            users.user.map((getUser, index)=>(
                                <tr key={index}>
                                <td>{ index+1} </td>
                                <td>{getUser.username}</td>
                                <td>{getUser.email}</td>
                                <td>{getUser.phone}</td>
                                <td>{getUser.address}</td>
                                <td>{ getUser.password} </td>
                                </tr>
                            ))
                    }                   
                    </tbody>
                    </table>                   
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}
export default Userlist;