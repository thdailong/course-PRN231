"use client"
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import Image from 'next/image'
import "keen-slider/keen-slider.min.css"
import "./lib.css"
import long from './Images/DaiLong.jpg'
import nghi from './Images/vanNghi.jpg'
import pHuy from './Images/PhuocHuy.jpg'
import nguyen from './Images/TanNguyen.jpg'
import phu from './Images/HungPhu.jpg'
import kHuy from './Images/KhaiHuy.jpg'
import { Box, Typography } from '@mui/material'

// ham custom carousel
const carousel = (slider) => {
    const z = 800
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}

export default function OurMember() {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )
    // ham custom carosel

    // this is lib so i cant use styles.class
    return (
        <Box className="wrapper">
            <Box className="scene">
                <Box className="carousel keen-slider" ref={sliderRef}>
                    <Box className="carousel__cell number-slide1 ">  <Image
                        src={long}
                        alt="Long"
                        objectFit='cover'
                        fill
                    /></Box>
                    <Box className="carousel__cell number-slide2">
                        <Image
                            src={nghi}
                            alt="Nghi"
                            objectFit='cover'
                            fill
                        />
                    </Box>
                    <Box className="carousel__cell number-slide3">
                        <Image
                            src={pHuy}
                            alt="Nghi"
                            objectFit='cover'
                            fill
                        />
                    </Box>
                    <Box className="carousel__cell number-slide4">
                        <Image
                            src={nguyen}
                            alt="Nghi"
                            objectFit='cover'
                            fill
                        />
                    </Box>
                    <Box className="carousel__cell number-slide5">
                        <Image
                            src={phu}
                            alt="Nghi"
                            objectFit='cover'
                            fill
                        />
                    </Box>
                    <Box className="carousel__cell number-slide6">
                        <Image
                            src={kHuy}
                            alt="Nghi"
                            objectFit='cover'
                            fill
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
