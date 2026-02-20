import { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion";
import { useDispatch } from 'react-redux';
import axios  from 'axios';
import { serverUrl } from '../App';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../redux/userSlice';
const Navbar = ({credits,userData}) => {
    const navigate = useNavigate();
    const [showCredits, setShowCredits] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const dispatch = useDispatch();

    const handleSignout = async () => {
        try {
            const result = await axios.get(serverUrl+"/api/auth/logout",{withCredentials: true});
            dispatch(setUserData(null));
            navigate("/auth")
            toast.success("Logout Successful");
        } catch (error) {
            toast.error("Logout Failed");
            console.log(error);
        }
    }
  return userData && (
    <motion.div
     initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 10,
          x: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.2,
        }} 
    className='relative rounded-2xl z-20 mx-2 mt-2 bg-gradient-to-br from-black/90 via-black/70 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.75)] flex items-center justify-between px-4 py-4'>
        <div className='flex flex-col justify-start items-start'>
            <div className='flex gap-2 items-center'>
                <img src="logo.png" className='w-12 h-10' alt="logo" />
                <span className='text-lg flex  font-semibold text-white'>ENG <div className='h-2 w-2 bg-green-600 mx-4 animate-ping rounded-full'></div>  </span>
            </div>
            <span className='text-gray-300 text-xs'>
                Exam Note Generator
            </span>
        </div>
        <div className='flex items-center gap-2 relative'>
            <div className="relative ">
                <motion.div 
                onClick={() => {setShowCredits(!showCredits); setShowProfile(false)}}
                whileHover={{scale:1.07}}
                whileTap={{scale: 1}}
                 className='flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm shadow-md cursor-pointer'>
                    <span className='text-xl'>💎</span>
                    <span className='text-[16px]'>{credits}</span>
                    <motion.span
                    className='ml-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-xs text-black font-bold'
                    whileHover={{scale:1.07}}
                    whileTap={{scale: 1}}
                    >
                        ➕
                    </motion.span>
                </motion.div>
                <AnimatePresence>
                {showCredits && 
                <motion.div 
                initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                }}
                animate={{opacity:1,y:10 , scale:1}}
                exit={{opacity:0,y:-10, scale:0.95}}
                transition={{duration:0.2}}
                className='absolute right-0 mt-4 w-64 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-4 text-white'>
                    <h4 className="font-semibold mb-2">Buy Credits</h4>
                    <p className='text-sm text-gray-300 mb-4'>Use credits to generate AI notes, diagrams & PDFs.</p>
                    <button onClick={() => {setShowCredits(false); navigate("/pricing")}} className='w-full py-2 rounded-lg bg-gradient-to-br from-white to-gray-200 text-black font-semibold hover:opacity-90'>
                        Buy Credits
                    </button>
                </motion.div>
                }
                </AnimatePresence>
            </div>
             <div className="relative ">
                <motion.div 
                onClick={() => {setShowProfile(!showProfile);setShowCredits(false)}}
                whileHover={{scale:1.07}}
                whileTap={{scale: 1}}
                 className='flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm shadow-md cursor-pointer'>
                    <span className='text-lg font-semibold text-blue-200'>{userData?.name?.slice(0,1)?.toUpperCase()}</span>
                    
                </motion.div>
                <AnimatePresence>
                {showProfile && 
                <motion.div 
                initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                }}
                animate={{opacity:1,y:10 , scale:1}}
                exit={{opacity:0,y:-10, scale:0.95}}
                transition={{duration:0.2}}
                className='absolute right-0 mt-4 w-52 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-4 text-white'>
                   <MenuItem text="History" onClick={()=> {setShowProfile(false); navigate("/history")}}/>
                   <div className="h-px bg-white/10 my-2 mx-3"/>
                   <MenuItem text="Sign out" onClick={() => {setShowProfile(false);handleSignout();}} red/>
                </motion.div>
                }
                </AnimatePresence>
            </div>
        </div>
    </motion.div>
  )
}
function MenuItem({onClick,text, red}) {
    return (
        <div onClick={onClick} className={`w-full text-left px-5 py-3 text-sm transition-colors ${red?"text-red-400 hover:bg-red-500/10":"text-gray-200 hover:bg-white/10"} cursor-pointer`}>
            {text}
        </div>
    )
}
export default Navbar