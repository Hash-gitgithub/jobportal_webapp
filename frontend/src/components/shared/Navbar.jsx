import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2, Menu } from 'lucide-react'; // Import Menu icon
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { GiTie } from 'react-icons/gi';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='bg-black'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8'> {/* Added horizontal padding */}
                <div className='flex items-center'>
                    <GiTie className='bg-amber-50 mr-2 text-2xl' />
                    <h1 className='text-2xl text-white font-bold'>Quick<span className='text-amber-300'>Jobs</span></h1>
                </div>

                {/* Desktop and Tablet Navigation */}
                <div className='hidden md:flex items-center gap-12'> {/* Hide on small screens */}
                    <ul className='flex font-medium items-center gap-5 text-white'>
                        {user && user.role === 'recruiter' ? (
                            <>
                                <li><NavLink to="/admin/companies"
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Companies</NavLink></li>
                                <li><NavLink to="/admin/jobs"
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Jobs</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/"
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Home</NavLink></li>
                                <li><NavLink to="/jobs"
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Jobs</NavLink></li>
                                <li><NavLink to="/browse"
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Browse</NavLink></li>
                            </>
                        )}
                    </ul>
                    {!user ? (
                        <div className='flex items-center gap-2'>
                            <Link to="/login"><Button className="bg-[#b18bf3] hover:bg-[#b18bf3b3] text-white cursor-pointer" >Login</Button></Link>
                            <Link to="/signup"><Button className="bg-[#F83002] hover:bg-[#f82f02b4] text-white cursor-pointer">Signup</Button></Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-amber-50">
                                <div>
                                    <div className='flex gap-2 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullname}</h4>
                                            <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        {user && user.role === 'student' && (
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                            </div>
                                        )}
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button className="cursor-pointer" onClick={logoutHandler} variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>

                {/* Mobile Menu Button and User Avatar/Login (visible on small screens) */}
                <div className='flex items-center md:hidden ml-0.5'> {/* Show on small screens, hide on medium and up */}
                    {!user ? (
                        <div className='flex items-center gap-2'>
                            <Link to="/login"><Button className="bg-[#b18bf3] hover:bg-[#b18bf3b3] text-white cursor-pointer" >Login</Button></Link>
                            <Link to="/signup"><Button className="bg-[#F83002] hover:bg-[#f82f02b4] text-white cursor-pointer">Signup</Button></Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-amber-50">
                                <div>
                                    <div className='flex gap-2 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullname}</h4>
                                            <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        {user && user.role === 'student' && (
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                            </div>
                                        )}
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button className="cursor-pointer" onClick={logoutHandler} variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                    <Button variant="ghost" className="md:hidden text-white ml-4" onClick={toggleMenu}>
                        <Menu />
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-black pb-4'>
                    <ul className='flex flex-col items-center font-medium gap-3 text-white'>
                        {user && user.role === 'recruiter' ? (
                            <>
                                <li><NavLink to="/admin/companies" onClick={toggleMenu}
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Companies</NavLink></li>
                                <li><NavLink to="/admin/jobs" onClick={toggleMenu}
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Jobs</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/" onClick={toggleMenu}
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Home</NavLink></li>
                                <li><NavLink to="/jobs" onClick={toggleMenu}
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Jobs</NavLink></li>
                                <li><NavLink to="/browse" onClick={toggleMenu}
                                    className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Browse</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;



// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'
// import { GiTie } from "react-icons/gi";

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }
//     return (
//         <div className='bg-black'>
//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
//                 <div className='flex items-center '>
//                     <GiTie className='bg-amber-50 mr-2 text-2xl'/>
//                     <h1 className='text-2xl text-white font-bold'>Quick<span className='text-amber-300'>Jobs</span></h1>
//                 </div>
//                 <div className='flex items-center gap-12'>
//                     <ul className='flex font-medium items-center gap-5 text-white'>
//                         {
//                             user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><NavLink to="/admin/companies"
//                                     className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Companies</NavLink></li>
//                                     <li><NavLink to="/admin/jobs"
//                                     className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Jobs</NavLink></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><NavLink to="/"
//                                     className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Home</NavLink></li>
//                                     <li><NavLink to="/jobs"
//                                     className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Jobs</NavLink></li>
//                                     <li><NavLink to="/browse"
//                                     className={({ isActive }) => (isActive ? 'text-amber-300' : undefined)}>Browse</NavLink></li>
//                                 </>
//                             )
//                         }


//                     </ul>
//                     {
//                         !user ? (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button className="bg-[#b18bf3] hover:bg-[#b18bf3b3] text-white cursor-pointer" >Login</Button></Link>
//                                 <Link to="/signup"><Button className="bg-[#F83002] hover:bg-[#f82f02b4] text-white cursor-pointer">Signup</Button></Link>
//                             </div>
//                         ) : (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80 bg-amber-50">
//                                     <div className=''>
//                                         <div className='flex gap-2 space-y-2'>
//                                             <Avatar className="cursor-pointer">
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                                 <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col my-2 text-gray-600'>
//                                             {
//                                                 user && user.role === 'student' && (
//                                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                         <User2 />
//                                                         <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
//                                                     </div>
//                                                 )
//                                             }

//                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button className="cursor-pointer" onClick={logoutHandler} variant="link">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar