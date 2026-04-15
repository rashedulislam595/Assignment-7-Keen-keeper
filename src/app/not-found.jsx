import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className=" flex items-center justify-center bg-gray-200 px-4">
            <div className="my-28 bg-gray-300 rounded-2xl shadow-lg p-8 max-w-md w-full text-center space-y-4">

                {/* 404 Text */}
                <h1 className="text-6xl font-bold text-gray-800">404</h1>

                {/* Message */}
                <h2 className="text-xl font-semibold text-gray-700">
                    Oops! The page you are looking for cannot be found.
                </h2>

                <p className="text-gray-500">
                    It seems like you have wandered off the path. But don not worry, you can find your way back.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="btn btn-primary text-white rounded-lg ">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;