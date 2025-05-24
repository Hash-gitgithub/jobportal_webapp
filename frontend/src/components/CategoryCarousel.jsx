import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const category = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Science",
//     "Graphic Designer",
//     "FullStack Developer"
// ]

// const CategoryCarousel = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-5">
//                 <CarouselContent>
//                     {
//                         category.map((cat, index) => (
//                             <CarouselItem className="md:basis-1/2 lg-basis-1/3" key={index}>
//                                 <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default CategoryCarousel

function CategoryCarousel() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-[#000000] p-6 w-full">
      <div className="flex items-center p-4 mb-6 md:mb-0">
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center mr-4 shadow-sm">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="#0088CC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
              stroke="#0088CC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-white m-0 leading-tight">586k+</h2>
          <p className="text-lg text-white m-0">Active Workers</p>
        </div>
      </div>

      <div className="flex items-center p-4 mb-6 md:mb-0">
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center mr-4 shadow-sm">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 16L5 16C4.44772 16 4 15.5523 4 15L4 5C4 4.44772 4.44772 4 5 4L19 4C19.5523 4 20 4.44772 20 5L20 15C20 15.5523 19.5523 16 19 16L14 16"
              stroke="#0088CC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 14V20" stroke="#0088CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 4V2" stroke="#0088CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7"
              stroke="#0088CC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-white m-0 leading-tight">586k+</h2>
          <p className="text-lg text-white m-0">Companies</p>
        </div>
      </div>

      <div className="flex items-center p-4">
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center mr-4 shadow-sm">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="#0088CC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M3.6 9H20.4" stroke="#0088CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.6 15H20.4" stroke="#0088CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M12 3C10.4087 5.38695 9.57266 8.19072 9.6 11C9.57266 13.8093 10.4087 16.613 12 19"
              stroke="#0088CC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 3C13.5913 5.38695 14.4273 8.19072 14.4 11C14.4273 13.8093 13.5913 16.613 12 19"
              stroke="#0088CC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-white m-0 leading-tight">586k+</h2>
          <p className="text-lg text-white m-0">Countries</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCarousel
 