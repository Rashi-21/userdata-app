import React, { useState} from 'react'
import { Link,  } from 'react-router-dom'
import swal from 'sweetalert'

async function loginUser(credentials) {
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


const Login = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const handleLoginEvent = async e => {
        e.preventDefault()
        const response = await loginUser({
            username, email, password
        })
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000
            })
            .then(()=> {
                localStorage.setItem('accessToken', response['accessToken'])
                localStorage.setItem('user', JSON.stringify(response['user']));
                window.location.href = '/profile'
            })
        }else {
            swal ("Failed", response.message, "error")
        }

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
                    
                    <button type='submit' className='btn btn-success btn-md'>Sign In</button>
                    <Link to='/' className='btn btn-primary'>Back</Link>
                </form>
            </div>
        </div>    
    </div>
  )
}


export default Login
