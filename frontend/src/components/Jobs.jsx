// import React, { useEffect, useState } from 'react'
// import Navbar from './shared/Navbar'
// import FilterCard from './FilterCard'
// import Job from './Job';
// import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

// // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const Jobs = () => {
//     const { allJobs, searchedQuery } = useSelector(store => store.job);
//     const [filterJobs, setFilterJobs] = useState(allJobs);

//     useEffect(() => {
//         if (searchedQuery) {
//             const filteredJobs = allJobs.filter((job) => {
//                 return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//             })
//             setFilterJobs(filteredJobs)
//         } else {
//             setFilterJobs(allJobs)
//         }
//     }, [allJobs, searchedQuery]);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto mt-5'>
//                 <div className='flex gap-5'>
//                     <div className='w-20%'>
//                         <FilterCard />
//                     </div>
//                     {
//                         filterJobs.length <= 0 ? <span>Job not found</span> : (
//                             <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                                 <div className='grid grid-cols-3 gap-4'>
//                                     {
//                                         filterJobs.map((job) => (
//                                             <motion.div
//                                                 initial={{ opacity: 0, x: 100 }}
//                                                 animate={{ opacity: 1, x: 0 }}
//                                                 exit={{ opacity: 0, x: -100 }}
//                                                 transition={{ duration: 0.3 }}
//                                                 key={job?._id}>
//                                                 <Job job={job} />
//                                             </motion.div>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Jobs




import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard'; // Assuming FilterCard can also be made responsive or hidden
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Button } from './ui/button'; // Assuming you have a Button component
import { SlidersHorizontal } from 'lucide-react'; // Icon for filter toggle

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle filter on mobile

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase());
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8'> {/* Added horizontal padding */}
                {/* Filter Toggle for Mobile */}
                <div className='md:hidden flex justify-end mb-4'>
                    <Button variant="outline" onClick={toggleFilter} className='flex items-center gap-2'>
                        <SlidersHorizontal className='h-4 w-4' />
                        {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
                    </Button>
                </div>

                <div className='flex flex-col md:flex-row gap-5'> {/* Changed to flex-col on mobile, flex-row on md */}
                    {/* Filter Card */}
                    <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-1/4 lg:w-1/5 xl:w-1/6`}> {/* Responsive width */}
                        <FilterCard />
                    </div>

                    {/* Job Listings */}
                    {filterJobs.length <= 0 ? (
                        <span className='flex-1 text-center text-gray-500 py-10'>No jobs found.</span>
                    ) : (
                        <div className='flex-1 h-[88vh] overflow-y-auto pb-5 custom-scrollbar'> {/* Added custom scrollbar class */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'> {/* Responsive grid */}
                                {filterJobs.map((job) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        key={job?._id}
                                    >
                                        <Job job={job} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Jobs;