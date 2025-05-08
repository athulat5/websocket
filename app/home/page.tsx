
export default function Dashboard() {
    const name = "User"
    return (
        <section >
        <button className="fixed md:absolute top-4 right-4 bg-black text-white hover:bg-white hover:text-black hover:border-b-black hover:border-2 hover:cursor-pointer px-4 py-2 rounded-md text-base md:text-lg 
        focus:bg-white focus:text-black focus:border-b-black focus:border-2  transition-colors duration-200">Logout</button>
        <div className="min-h-screen flex items-center justify-center p-4 md:p-0 ">
        <div className="flex flex-col gap-4 text-center px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl text-center">Hello {name}, Welcome to Home</p>
        </div>
        </div>        
        
        </section>
    )
}