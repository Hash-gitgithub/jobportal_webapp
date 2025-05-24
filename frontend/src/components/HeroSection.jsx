import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='w-full font-inter'> {/* Added font-inter for consistent styling */}
            {/*
              This div handles the responsive background and text color.
              - By default (mobile-first), it has a white background (bg-white) and black text (text-black).
              - On medium screens (md) and up, it applies the background image using Tailwind's `md:bg-[url(...)]` utility,
                and ensures it covers the area (`md:bg-cover md:bg-center`).
              - `py-16 px-4` provides responsive padding, replacing the non-standard `p-13`.
            */}
            <div
                className="relative text-center bg-white py-16 px-4
                           md:bg-cover md:bg-center md:bg-[url('images/banjob1.jpg')]
                           text-black"
            >
                {/* Fallback image for demonstration. In your actual project, ensure 'images/banjob1.jpg' is accessible. */}
                {/* If 'images/banjob1.jpg' is not found, the `bg-white` will remain, which is desired for mobile. */}
                
                <div className='flex flex-col gap-5 my-10 max-w-4xl mx-auto'>
                    {/* "Elevate Your Career!" Tag */}
                    <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm md:text-base'>
                        Elevate Your Career!
                    </span>
                    
                    {/* Main Heading */}
                    <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
                        Search, Apply & <br className='block md:hidden' /> Get Your <span className='text-red-500'>Dream Jobs</span>
                    </h1>
                    
                    {/* Paragraph */}
                    <p className='text-sm md:text-base px-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
                    </p>
                    
                    {/* Search Input Container */}
                    {/*
                      - On mobile (default), it takes full width (w-full) with horizontal padding (px-4).
                      - On small screens (sm) and up, it becomes 90% width (sm:w-[90%]).
                      - On medium screens (md) and up, it goes back to 40% width (md:w-[40%]).
                      - `max-w-xl` prevents it from becoming excessively wide on very large screens.
                      - `bg-white` ensures the input container itself has a white background, which is good for contrast.
                    */}
                    <div className='flex w-full sm:w-[90%] md:w-[40%] max-w-xl shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-2 mx-auto bg-white'>
                        <input
                            type="text"
                            placeholder='Find your dream jobs'
                            onChange={(e) => setQuery(e.target.value)}
                            className='outline-none border-none w-full py-2 px-2 text-gray-800 rounded-l-full'
                        />
                        <Button
                            onClick={searchJobHandler}
                            className="rounded-full md:rounded-r-full bg-amber-300 text-gray-800 hover:bg-amber-400 transition-colors duration-200 p-2 md:p-3"
                        >
                            <Search className='h-5 w-5 cursor-pointer text-gray-800' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        // <div className='w-full' >
        // <div className="relative text-center bg-cover bg-center p-13"  style={{backgroundImage: `url('images/banjob1.jpg')`}}>
        //     <div className='flex flex-col gap-5 my-10'>
        //         <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Elevate Your Career!</span>
        //         <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-red-500'>Dream Jobs</span></h1>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
        //         <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
        //             <input
        //                 type="text"
        //                 placeholder='Find your dream jobs'
        //                 onChange={(e) => setQuery(e.target.value)}
        //                 className='outline-none border-none w-full'

        //             />
        //             <Button onClick={searchJobHandler} className="rounded-r-full bg-amber-300">
        //                 <Search className='h-5 w-5 cursor-pointer' />
        //             </Button>
        //         </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default HeroSection