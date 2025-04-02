import React from 'react'
import { Link } from 'react-scroll'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo.png'
import cv from '../../pdf/resume.pdf'


const Header = (props) => {

    return (

        <section className="wpo-site-header bg-transparent  absolute left-0 top-0 w-full z-50 md:py-[20px]">
            <div className="wraper">
                <div className="flex items-center justify-between">
                    <MobileMenu />
                    <div className="w-[350px] md:w-[280px] sm:w-[200px] col:w-[50px]">
                        <AnchorLink href='#scrool' className="text-[35px] col:text-[25px] font-bold flex items-center md:justify-center text-white">
                                <img className="mr-[10px] h-16" src={Logo} alt="Jay Chauhan" />Jay Chauhan
                        </AnchorLink>
                    </div>
                    <ul className="md:hidden">
                        <li className="relative inline-block">
                            <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    ">
                                <AnchorLink href='#scrool'>
                                    Home
                                </AnchorLink>
                            </Link>
                        </li>
                        <li className="relative inline-block">
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    ">About</Link>
                        </li>
                        <li className="relative inline-block group">
                            <Link activeClass="active" to="service" spy={true} smooth={true} duration={500} className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    ">Service</Link> </li>
                        <li className="relative inline-block group">
                            <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    ">Portfolio</Link></li>
                        <li className="relative inline-block">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    ">Contact</Link>
                        </li>
                        <li className="relative inline-block group">
                            <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    ">Blog</Link>
                        </li>
                    </ul>
                    <a className="theme-btn col:w-50px" download="Jay_Chauhan_Resume.pdf" href={cv}>
                        <img className="hidden overflow-hidden opacity-0" alt="ImageName" src={cv} />
                        Resume
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Header;