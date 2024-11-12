import React from "react";
import Typewriter from '../component/InspirationalMessages'
import FAQ from '../component/Faq'

import HeroSection from "../component/homepage/HeroSection";
import FeaturedCourses from "../component/homepage/FeaturedCourses";
import CourseCategories from "../component/homepage/Categories";
import RealStoriesCarousel from "../component/homepage/RealStories";
import PartnerCarousel from "../component/homepage/PartnerCarousel";
import Footer from "../component/homepage/Footer";

function Home() {
  return (
    <>
    <HeroSection/>
    <Typewriter/>
    <FeaturedCourses />
    <CourseCategories/>
   <PartnerCarousel/>
    <RealStoriesCarousel/>
    <FAQ />
    <Footer/>
    
    </>
  )
}

export default Home;