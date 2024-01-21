// import React from 'react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import Pic1 from './pix1.png';
// import { FaArrowRight } from 'react-icons/fa';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// const Slide = () => {
//   return (
//     <Swiper
//       slidesPerView={2}
//       spaceBetween={30}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//     >
//       {[1, 2, 3, 4].map((cardNumber) => (
//         <SwiperSlide key={cardNumber}>
//           <div className='h-[480px] xlg:w-[24%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
//             <div className='h-[285px] w-full'>
//               <img src={Pic1} alt='no picture' className='w-full h-full' />
//             </div>
//             <h4 className='text-[20px] font-bold'>NewsPaper</h4>
//             <div className='flex flex-col justify-start items-start gap-y-1'>
//               <h5 className='text-[23px] font-normal'>Designing invisible interfaces</h5>
//               <p className='text-[16px] font-normal'>
//                 Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, mipydon:{' '}
//               </p>
//             </div>
//             <div className='flex flex-row justify-center items-center text-[#093F68] gap-x-2 uppercase'>
//               <a href='#' className='text-[17px] font-bold'>
//                 Read More
//               </a>
//               <FaArrowRight />
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Slide;
