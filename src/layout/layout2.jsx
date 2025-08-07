import { useNavigate } from 'react-router-dom';
import logoutSVG from '../assets/logout-2-svgrepo-com.svg'
import notificationSVG from '../assets/notification-bell-on-svgrepo-com.svg'
import profileSVG from '../assets/user-profile-person-svgrepo-com.svg'
import logo from '../assets/logo2.png'



function Layout2({ children }) {
    const navigate = useNavigate();
    
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
                    <ul className="flex gap-6 text-sm font-bold px-20">
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/')}>Home</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/signUp')}>Sign Up</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/login')}>Login</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/about')}>About Us</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/contact')}>Contact Us</li>
                        <li className="hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/premium')}>Get Premium</li>
                       

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

export default Layout2;