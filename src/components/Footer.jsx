import React from 'react'
import footer from '../footer.png'
const Footer = () => {
  return (
    <div className='w-full h-[400px] mt-10 relative bbg-i'>
        <img src={footer} alt="" className="opacity-20 w-full h-full object-cover"/>
        <p className='absolute top-[15%] left-[50%] translate-x-[-50%] text-5xl text-red-600 font-bold uppercase cursor-pointer pr-5'>Netflix</p>
        <div className='flex gap-20 absolute left-[50%] translate-x-[-50%] top-[45%] text-[#757575]'>
            <ul>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Các câu hỏi thường gặp</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Quan hệ nhà đầu tư</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Quyền riêng tư</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Kiểm tra tốc độ</li>
            </ul>
            <ul>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Các câu hỏi thường gặp</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Quan hệ nhà đầu tư</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Quyền riêng tư</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Kiểm tra tốc độ</li>
            </ul>
            <ul>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Các câu hỏi thường gặp</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Quan hệ nhà đầu tư</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Quyền riêng tư</li>
                <li className='mb-2 cursor-pointer hover:border-b-2 border-solid border-[#757575]'>Kiểm tra tốc độ</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer