"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';


const logos = [
    { src: '/assets/images/unsplash.svg', alt: 'Unsplash Logo' },
    { src: '/assets/images/notion.svg', alt: 'Notion Logo' },
    { src: '/assets/images/intercom.svg', alt: 'Intercom Logo' },
    { src: '/assets/images/descript.svg', alt: 'Descript Logo' },
    { src: '/assets/images/grammarly.svg', alt: 'Grammarly Logo' },
    { src: '/assets/images/quantum.svg', alt: 'Quantum.svg Logo' },
];


const Marquee = () => {
    return (
        <div className="flex mt-16 overflow-hidden before:content-[''] after:content-[''] before:absolute after:absolute relative before:h-full after:h-full before:w-5 after:w-5 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear_gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear_gradient(to_left,#000,rgb(0,0,0,0))]">
            <motion.div
                transition={{
                    duration: 15,
                    ease: 'linear',
                    repeat: Infinity
                }}
                initial={{ translateX: '0%' }}
                animate={{ translateX: '-50%' }}
                className='flex flex-none gap-16 pr-16'>
                {
                    logos.map(({ src, alt }) => (
                        <Image src={src} key={alt} alt={alt} className='flex-none h-8 w-auto' width={64} height={32} />
                    ))
                }
                {
                    logos.map(({ src, alt },idx) => (
                        <Image src={src} key={alt+idx} alt={alt} className='flex-none h-8 w-auto' width={64} height={32} />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Marquee
