import React from 'react'

const Header = () => {
    return (
        <div className="w-full h-screen">
            <div className='bg-gray-500 flex flex-col justify-between items-center h-full'>
                <nav className='flex justify-between items-center w-full p-5 font-robotoCondensed'>
                    <div>
                        <a href="#">Logo</a>
                    </div>
                    <a href="#">Porfolio</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>

                </nav>
                <div className="text-[60px] font-bold bg-black text-white p-5 w-full uppercase">
                    <h1>Riyadh Awwibi</h1>
                </div>
                <div className='flex flex-row justify-start gap-5 p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Header