import React from 'react'
import { useState, useEffect } from 'react'
import {BiSearch} from 'react-icons/bi'
import {IoIosNotifications} from 'react-icons/io'
import {AiOutlineCaretDown} from 'react-icons/ai'
import avatar from '../avatar.jpg'
const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            window.scrollY > 100 ? setScroll(true) : setScroll(false);
        })
    });

  return (
    <div className={`text-white flex justify-between items-center p-4 fixed top-0 w-full z-[99] bg-gradient-to-t from-transparent to-black ${scroll && 'bg-black transition-all duration-700 drop-shadow-2xl'}`}>
        <div className="flex justify-center items-center">
            <p className="text-5xl text-red-600 font-bold uppercase cursor-pointer pr-5">Netflix</p>
            <div className='text-xl'>
               <span className="px-3 font-medium cursor-pointer hover:text-red-500 transition-all">Trang chủ</span> 
               <span className="px-3 font-medium cursor-pointer hover:text-red-500 transition-all">Phim T.hình</span> 
               <span className="px-3 font-medium cursor-pointer hover:text-red-500 transition-all">Phim</span> 
               <span className="px-3 font-medium cursor-pointer hover:text-red-500 transition-all">Mới thêm</span>  
               <span className="px-3 font-medium cursor-pointer hover:text-red-500 transition-all">Danh sách của tôi</span> 
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <BiSearch size={24}/>
            <span className='px-3'>Annh</span>
            <IoIosNotifications size={24}/>
            <img src={avatar} alt="" className='w-8 h-8 rounded object-cover mx-3' />
            <AiOutlineCaretDown size={24}/>
        </div>
    </div>  
  )
}

export default Navbar