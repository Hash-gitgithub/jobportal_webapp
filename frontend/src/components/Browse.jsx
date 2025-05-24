// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';

// // const randomJobs = [1, 2,45];

// const Browse = () => {
//     useGetAllJobs();
//     const {allJobs} = useSelector(store=>store.job);
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         return ()=>{
//             dispatch(setSearchedQuery(""));
//         }
//     },[])
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto my-10'>
//                 <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
//                 <div className='grid grid-cols-3 gap-4'>
//                     {
//                         allJobs.map((job) => {
//                             return (
//                                 <Job key={job._id} job={job}/>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Browse



import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job'; // Assuming Job component is already responsive
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        // This ensures the search query is cleared when leaving the browse page
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, [dispatch]); // Added dispatch to dependency array

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8'> {/* Added responsive padding */}
                <h1 className='font-bold text-xl sm:text-2xl my-6 sm:my-10 text-center sm:text-left'> {/* Responsive text size and alignment */}
                    Search Results ({allJobs.length})
                </h1>
                {
                    allJobs.length === 0 ? (
                        <div className='text-center text-gray-500 py-10'>
                            <p>No jobs found matching your search criteria.</p>
                            <p>Try adjusting your filters or search query.</p>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'> {/* Responsive grid */}
                            {allJobs.map((job) => (
                                <Job key={job._id} job={job} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Browse;