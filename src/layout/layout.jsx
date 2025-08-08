import { Link, useNavigate } from 'react-router-dom';
import logoutSVG from '../assets/logout-2-svgrepo-com.svg'
import notificationSVG from '../assets/notification-bell-on-svgrepo-com.svg'
import profileSVG from '../assets/user-profile-person-svgrepo-com.svg'
import logo from '../assets/logo2.png'
import { logout } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';



function Layout({ children }) {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
     const dispatch = useDispatch(); // 👈 Move here (top of component)

async function handleLogout(e) {
  e.preventDefault();
  dispatch(logout()); // Dispatch the logout thunk
  navigate('/login'); // Optional: redirect to login after logout
}


    return (
        <>
            <nav className="flex items-center justify-between h-16 px-6 text-blue-900 font-mono shadow-md">
                
                <div
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => navigate('/')}
                >   
                    <img src={logo} alt="" className='h-12 w-auto'/>
                    <p>pathVibe</p>
                </div>

                
                <div className="hidden md:block">
                    <ul className="flex gap-4 text-sm font-bold px-20">
                       
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/dashboard')}>Dashboard</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/goal')}>Goals</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/calendar')}>Calendar</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/resources')}>Resources</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/achievements')}>Achievements</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/progress')}>Progress</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/folders')}>Study Material</li>
                         <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/feedback')}>Feedback</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/profile')}><img src={profileSVG} className='h-10 w-auto'/></li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/notifications')}><img src={notificationSVG} className='h-6 w-auto'/></li>
                        {/*<li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/logout')}> <img src={logoutSVG} className="h-6 w-auto " />
                        
</li>*/}
                     <li className='hover:text-[#FF9110]'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>Logout</Link>
                            ) : (
                               ""
                            )}
                        </li>
                    </ul>
                    
                </div>
            </nav>

            {/* Page Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer>
              <div className="mt-8 border-t  border-gray-300 bg-indigo-500 pt-4 text-center text-gray-800 text-sm">
      © {new Date().getFullYear()} PathVibe. All rights reserved.
    </div>
            </footer>



        </>
    );
}

export default Layout;