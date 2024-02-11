
function Navbar() {
  return (
    <nav className='absolute w-screen h-20'>
        <div className="flex items-center justify-center text-gray-300 w-[87%] h-full m-auto">
        <div className="flex items-center justify-between w-full h-full">
        <h1 className="text-2xl">GoGrades</h1>
        <div className="flex items-center gap-8">
            <h1>Why us</h1>
            <h1>Services</h1>
            <h1>Testemonials</h1>
            <h1>Order Now</h1>
        </div>
        </div>
        
        </div>
    </nav>
  )
}

export default Navbar