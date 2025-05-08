"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"

type Inputs = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">Login</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            {...register("email", { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} 
          />
          {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            {...register("password", { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })} 
          />
          {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-black hover:bg-white hover:text-black hover:border-b-black hover:border-2  text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
        >
          Login
        </button>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
           Don&apos;t have an account?{" "}
            <Link href="/reg" className="text-blue-500 hover:text-blue-700 font-semibold">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </section>
  )
}