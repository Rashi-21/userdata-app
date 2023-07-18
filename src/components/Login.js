import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../app/user/userSlice';

function Login() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const {loading, error} = useSelector((state) => {return state.user})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredential = {
            username, email, password
        }
        dispatch(loginUser(userCredential))
        .then((result) => {
            if(result.payload) {
                setUsername('')
                setEmail('')
                setPassword('')
                navigate('/')
            }
        })
        console.log(userCredential)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-8">
                <h3 className="mt-3">Sign-in to your Account</h3>
                <form className='form-group custom-form ' onSubmit={handleLoginEvent}>
                    <label>Username</label>
                    <input type='text' required className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <br />
                    <label>Email</label>
                    <input type='email' required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br />
                    <label>Password</label>
                    <input type='password' required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    
                    <button type='submit' className='btn btn-success btn-md'>{loading?'Loading...':'Sign-in'}</button>
                    {error&&(
                        <div className='alert alert-danger' role='alert'>{error}</div>
                    )}
                    <Link to='/' className='btn btn-primary'>Back</Link>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
