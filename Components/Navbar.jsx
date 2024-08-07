// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex py-3 flex-wrap justify-around'>
//       <h1 className="text-lg font-semibold">Todo APP</h1>
//       <ul className='flex gap-[40px] text-m'>
//         <li>Home</li>
//         <li>Products</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white'>
      <div className='container mx-auto w-4/5 flex py-4 flex-wrap justify-between items-center'>
        <h1 className="text-2xl font-semibold">Todo APP</h1>
        <ul className='flex gap-8 text-lg'>
          <li className='hover:text-gray-400 cursor-pointer'>Home</li>
          <li className='hover:text-gray-400 cursor-pointer'>Products</li>
          <li className='hover:text-gray-400 cursor-pointer'>About</li>
          <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
