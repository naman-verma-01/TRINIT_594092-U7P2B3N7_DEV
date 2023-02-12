import {React,useState} from 'react'
import carbonfootprintimg from '../images/carbonfootprint.avif'
const Signup = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handlesubmit=async()=>{
           let data=await fetch('https://tri-nit-backend.vercel.app/api/user/signup',{
              method:"POST",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                'Accept': 'application/json',
              },
              body:JSON.stringify({
                  email:email,
                password:password
              })
           });
           let maindata=await data.json();
           console.log(maindata);
    }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{backgroundImage:'https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80'}}>
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <img src={carbonfootprintimg} width="100" height="50" style={{borderRadius:"50%"}} alt="" srcSet="" />
        <h1 className="mb-2 text-2xl">CarbonFootprint</h1>
        <span className="text-gray-300">Enter SignUp Details</span>
      </div>
      <form action="#">
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" onChange={(event)=>{event.preventDefault();setemail(event.target.value)}} type="email" name="email" placeholder="id@email.com" />
        </div>

        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" onChange={(event)=>{event.preventDefault();setpassword(event.target.value)}} name="password" placeholder="*********" />
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" onClick={(event)=>{event.preventDefault();handlesubmit()}} className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Signup
