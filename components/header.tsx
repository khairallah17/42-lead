import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-start mb-5 gap-6'>
        <Image
            src="https://profile.intra.42.fr/assets/42_logo-7dfc9110a5319a308863b96bda33cea995046d1731cebb735e41b16255106c12.svg"
            alt=""
            width={64}
            height={64}
        />
        <div>
            <h1 className='text-white text-xl font-semibold'>POOL - JUNE 2024</h1>
            <h3 className='text-slate-600 text-sm'>300 candidates</h3>
        </div>
    </div>
  )
}

export default Header