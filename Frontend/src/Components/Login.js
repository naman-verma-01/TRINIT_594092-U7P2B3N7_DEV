import { React, useState } from 'react'
import { useNavigate } from 'react-router';

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()
  const handlesubmit = async () => {
    let data = await fetch('https://tri-nit-backend.vercel.app/api/user/login', {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    let maindata = await data.json();
    console.log(maindata);

    if(maindata.msg === 'Login Successfull'){
      props.userFunc(maindata.data[0].userid)
      navigate("/")
    }

  }
  return (
    <div className="relative flex h-full w-full">
      <div className="h-screen w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div>
            <p className="text-2xl">Login|</p>
            <p>please login to continue|</p>
          </div>
          <div className="my-6">
            <a href="/signup" className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">Sign Up Here</a>
          </div>
          <div>
            <fieldset className="border-t border-solid border-gray-600">
              <legend className="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
            </fieldset>
          </div>
          <div className="mt-10">
            <form>
              <div>
                <label className="mb-2.5 block font-extrabold" for="email">Email</label>
                <input type="email" id="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" onChange={(event) => { event.preventDefault(); setemail(event.target.value) }} placeholder="mail@user.com" />
              </div>
              <div className="mt-4">
                <label className="mb-2.5 block font-extrabold" for="email">Password</label>
                <input type="password" id="password" onChange={(event) => { event.preventDefault(); setpassword(event.target.value) }} className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
              </div>
              <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                <div><input type="checkbox" id="remember" /><label for="remember" className="mx-2 text-sm">Remember me</label></div>

              </div>
              <div className="my-10">
                <button onClick={(event) => { event.preventDefault(); handlesubmit(); }} className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 bg-blue-600">
        <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" className="h-full w-full" />
      </div>
    </div>
  )
}

export default Login
