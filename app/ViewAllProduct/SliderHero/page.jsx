"use client"
import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import firstImg from '../Images/img1.jpg'
import scnImg from '../Images/img2.jpg'
import thirdstImg from '../Images/img3.jpg'
import fourImg from '../Images/img4.jpg'
import fiveImg from '../Images/img5.jpg'
import sixImg from '../Images/img6.jpg'

const animation = { duration: 5000, easing: (t) => t }

export default function SliderHero() {

    // vi ly do su dung thu vien nen se phai su dung class
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <Box ref={sliderRef} pt="100px" className='keen-slider' sx={{ height: '400px' }}>
            <Box className='keen-slider__slide number-slide1' sx={{ borderRadius: "20px" }}>
                <Image
                    alt='picture'
                    src={firstImg}
                    fill
                    objectFit='cover'
                /></Box>
            <Box className='keen-slider__slide number-slide2' sx={{ borderRadius: "20px" }}> <Image
                alt='picture'
                src={scnImg}
                objectFit='cover'
                fill
            /></Box>
            <Box className='keen-slider__slide number-slide3' sx={{ borderRadius: "20px" }}> <Image
                alt='picture'
                src={thirdstImg}
                objectFit='cover'
                fill
            /></Box>
            <Box className='keen-slider__slide number-slide4' sx={{ borderRadius: "20px" }}> <Image
                alt='picture'
                src={fourImg}
                objectFit='cover'
                fill
            /></Box>
            <Box className='keen-slider__slide number-slide5' sx={{ borderRadius: "20px" }}> <Image
                alt='picture'
                src={fiveImg}
                objectFit='cover'
                fill
            /></Box>
            <Box className='keen-slider__slide number-slide6' sx={{ borderRadius: "20px" }}> <Image
                alt='picture'
                src={sixImg}
                objectFit='cover'
                fill
            /></Box>
        </Box>
    )
}
