import React from 'react'

export default function TestimonyCard() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <div>
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Testimony" className="w-16 h-16 rounded-full mb-4" />
        </div>
        <div>
            <p className="text-gray-600 mb-2 text-2xl font-semibold text-center">
                Lorems
            </p>
            <p className="text-gray-500 text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </div>
  )
}
