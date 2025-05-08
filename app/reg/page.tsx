"use client"
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import { Register } from "@/server/backend"
import { useRouter } from "next/navigation"

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterPage() {
  const  Router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        const response = await Register(data);
        if (response.ok) {
            alert(response.message)
            Router.push("/")
        } else {
            alert(response.message)
        }
        console.log(response)
      }
    
    const password = watch("password")

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold mb-8 text-gray-800">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("name", { required: 'Name is required' })} 
                />
                {errors.name && <span className="text-red-500 text-xs italic">{errors.name.message}</span>} 
              </div>
            
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", { required: true })} 
                />
                {errors.email && <span className="text-red-500 text-xs italic">Email is required</span>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password", { required: 'Password is required' })} 
                />
                {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("confirmPassword", { 
                    required: 'Please confirm your password',
                    validate: (value) => value === password || "The passwords do not match",
                  })} 
                />
                {errors.confirmPassword && <span className="text-red-500 text-xs italic">{errors.confirmPassword.message}</span>} 
              </div>

              <button 
                type="submit" 
                className="w-full bg-black hover:bg-white hover:text-black hover:border-b-black hover:border-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-gray-600">Already have an account? <Link href="/ " className="text-blue-500 hover:underline">Login</Link></p>
        </section>
    )
}