import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addUser } from '../app/user/userSlice'
import {useNavigate} from 'react-router-dom'

function AddUser() {

    const dispatch =useDispatch()

    const navigate = useNavigate()
    const {isSuccess} = useSelector((state) => state.user)

    const[inputValue, setInputValue] = useState({username: '', email: '', phone:'', address: '', password: ''})

    const handleInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        dispatch(addUser(inputValue))
        console.log(inputValue)

        setTimeout(() => {
            navigate("/userlist")
        }, 2000)

    }

  return (
    <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <h3 className="mt-3">Add New User</h3>
                    {
                        isSuccess!=='' && <p className='text-primary'>{isSuccess.success}</p>
                    }
                     
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label  className="col-sm-3 col-form-label">Username</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="username" placeholder="Enter Username" value={inputValue.username} onChange={handleInput} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label  className="col-sm-3 col-form-label">Email</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="email" placeholder="Enter Email" value={inputValue.email} onChange={handleInput}/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Phone No</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="phone" placeholder="Enter Phone" value={inputValue.phone} onChange={handleInput} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label  className="col-sm-3 col-form-label">Address</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="address" placeholder="Enter Address" value={inputValue.address} onChange={handleInput} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Password</label>
                            <div className='col-md-8'>
                                <input type='password' className='form-control' name='password' placeholder='Enter Password' value={inputValue.password} onChange={handleInput}/>
                            </div>                            
                        </div>

                        <div className="row mb-3">
                            <label  className="col-sm-3 col-form-label"></label>
                            <div className="col-md-1">
                               <button type="submit" className="btn btn-info bnt-lg">Submit</button> 
                                 </div>
                        </div>
                    </form>



                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default AddUser
