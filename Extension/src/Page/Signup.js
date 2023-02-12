import React, { useState } from 'react'

function Signup(props) {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const submit = async()=>{
        console.log(email,pass)
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', "https://tri-nit-backend.vercel.app");
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');


        let response = await fetch("https://tri-nit-backend.vercel.app/api/user/signup",
            {
                method: 'POST',
                headers,
                body: JSON.stringify({ email :email, password:pass })
            })

        response = await response.json()
        
        if(response.msg === "Sign Up Successfull"){
            localStorage.setItem("statusExt","true")
            localStorage.setItem("userid",email)
        }
        //window.alert(`response ==> ${JSON.stringify(response)}`)
        props.toggler()

    }
    return (
        <div className='popup'>
            <div><h2>Sign Up</h2></div>
            <div><h2>Lets Stand together!</h2></div>
            <div><input style={{width:"90vw"}} type='text' placeholder='Email ID...' onChange={(e)=> setEmail(e.target.value)}/></div>
            <div><input style={{width:"90vw"}} type='password' placeholder='Password...' onChange={(e)=> setPass(e.target.value)}/></div>
            <br/> <div><button style={{ color: 'white', padding: '5px', backgroundColor: '#8860D0', border: 'none', borderRadius: '4px',width:"90vw" }} onClick={submit}>Join</button></div>
        </div>
    )
}

export default Signup