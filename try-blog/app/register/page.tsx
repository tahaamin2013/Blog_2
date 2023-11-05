'use client'

import Input from "@/components/input/input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface InitialStateProps {
    name:string,
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    name:'',
    email:'',
    password:''
}

export default function page() {
    const [state,setState] = useState(initialState)
    const router = useRouter();

    function handleChange(event:any) {
		setState({ ...state, [event.target.name]: event.target.value });
	}

    const onSubmit = (event:FormEvent) => {

        event.preventDefault()

        axios.post('/api/register',state)
        .then(() => {
          router.refresh()
        })
        .then(() => {
          setTimeout(() => {
            router.push('/login')
          },2500)
        })
        .catch((err:any) => {
        })
        .finally(() => {
        })
    }

  return (
    <form className='text-center' onSubmit={onSubmit}>
    <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
    <Input placeholder='Name' id='name' type='text' name='name' onChange={handleChange} value={state.name}/>
    <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email}/>
    <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password}/>
    <button type='submit'>Submit</button>
    </div>

    <div>
          <div>Do you have an account ? <Link href='/login'>Sign in</Link></div>
        </div>
    </form>

    
  )
}
