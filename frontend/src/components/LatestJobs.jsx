import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className='max-w-7xl mx-auto my-7 px-4 sm:px-6 lg:px-8'> {/* Added horizontal padding */}
            <h1 className='text-3xl sm:text-4xl font-bold text-center sm:text-left'> {/* Adjusted text size and alignment */}
                <span className='text-amber-300'>Latest</span> Job Openings!
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5'> {/* Responsive grid */}
                {
                    allJobs.length <= 0 ? (
                        <span className='col-span-full text-center text-gray-500'>No Job Available</span>
                    ) : (
                        allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                    )
                }
            </div>
        </div>
    );
};

export default LatestJobs;


// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-7'>
//             <h1 className='text-4xl font-bold'><span className='text-amber-300'>Latest</span> Job Openings!</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs