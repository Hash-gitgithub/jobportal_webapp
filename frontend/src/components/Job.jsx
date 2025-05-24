// import React from 'react'
// import { Button } from './ui/button'
// import { Bookmark } from 'lucide-react'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const Job = ({job}) => {
//     const navigate = useNavigate();
//     // const jobId = "lsekdhjgdsnfvsdkjf";

//     const daysAgoFunction = (mongodbTime) => {
//         const createdAt = new Date(mongodbTime);
//         const currentTime = new Date();
//         const timeDifference = currentTime - createdAt;
//         return Math.floor(timeDifference/(1000*24*60*60));
//     }
    
//     return (
//         <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
//             <div className='flex items-center justify-between'>
//                 <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
//                 {/* <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button> */}
//             </div>

//             <div className='flex items-center gap-2 my-2'>
//                 <Button className="p-6" variant="outline" size="icon">
//                     <Avatar>
//                         <AvatarImage src={job?.company?.logo} />
//                     </Avatar>
//                 </Button>
//                 <div>
//                     <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                     <p className='text-sm text-gray-500'>India</p>
//                 </div>
//             </div>

//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-green-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>
//             <div className='flex items-center gap-4 mt-4'>
//                 <Button className="cursor-pointer hover:bg-black hover:text-white" onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
//             </div>
//         </div>
//     )
// }

// export default Job



import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        const days = Math.floor(timeDifference / (1000 * 24 * 60 * 60));
        if (days === 0) return 'Today';
        if (days === 1) return '1 day ago';
        return `${days} days ago`;
    };

    return (
        <div className='p-4 sm:p-5 rounded-md shadow-xl bg-white border border-gray-100 flex flex-col h-full'> {/* Added flex-col and h-full */}
            <div className='flex items-center justify-between mb-2'> {/* Added mb-2 */}
                <p className='text-xs sm:text-sm text-gray-500'>{daysAgoFunction(job?.createdAt)}</p>
                {/* Bookmark button can be uncommented if needed */}
                {/* <Button variant="outline" className="rounded-full" size="icon"><Bookmark className='h-4 w-4' /></Button> */}
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-4 sm:p-6 flex-shrink-0" variant="outline" size="icon"> {/* flex-shrink-0 to prevent avatar from shrinking */}
                    <Avatar className='h-8 w-8 sm:h-10 sm:w-10'> {/* Responsive avatar size */}
                        <AvatarImage src={job?.company?.logo} alt={`${job?.company?.name} logo`} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-base sm:text-lg'>{job?.company?.name}</h1> {/* Responsive text size */}
                    <p className='text-xs sm:text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div className='flex-grow'> {/* Allows description to take available space */}
                <h1 className='font-bold text-base sm:text-lg my-2'>{job?.title}</h1> {/* Responsive text size */}
                <p className='text-sm text-gray-600 line-clamp-3'>{job?.description}</p> {/* line-clamp for description */}
            </div>

            <div className='flex flex-wrap items-center gap-2 mt-4'> {/* flex-wrap for badges */}
                <Badge className={'text-green-700 font-bold text-xs sm:text-sm'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold text-xs sm:text-sm'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-blue-700 font-bold text-xs sm:text-sm'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button
                    className="w-full cursor-pointer hover:bg-black hover:text-white text-sm sm:text-base" /* Full width button on small screens, responsive text */
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                >
                    Details
                </Button>
            </div>
        </div>
    );
};

export default Job;