import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../../images/logo.png'
import CtaSection from '../ctaSection/ctaSection'


const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="relative bg-[#191919] z-10">
            <CtaSection />
            <div className="pt-[170px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
                <div className="wraper">
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
                        <div className="w-[420px] xl:w-[355px] lg:w-[297px] pr-[75px] md:mb-[40px] lg:pr-0 relative text-left after:absolute after:content[''] after:bg-[#ffffff0d] after:w-[1px] after:h-full after:right-[30px] after:top-0 after:lg:hidden">
                            <div className="mb-7">
                                <Link className="text-[45px] font-bold flex items-center text-white" to="/">
                                    <img className="mr-[10px] h-32" src={Logo} alt="" />Jay Chauhan</Link>
                            </div>
                            <p className="text-white text-[16px] mb-[10px]">Welcome and open yourself to your truest love this year with us! With the Release
                                Process</p>
                            <ul className="overflow-hidden pt-[15px]">
                                <li className="text-white float-left group "><a rel='noopener noreferrer' target='_blank' className="text-white transition-all group-hover:text-[#FFE600]" href="https://mail.google.com/mail/u/0/?fs=1&to=contact@dj-jay.in&tf=cm"><i className="ti-email"></i></a></li>
                                <li className="text-white float-left group ml-[15px]"><a rel='noopener noreferrer' target='_blank' className="text-white transition-all group-hover:text-[#FFE600]" href="https://x.dj-jay.in"><i className="ti-twitter-alt"></i></a></li>
                                <li className="text-white float-left group ml-[15px]"><a rel='noopener noreferrer' target='_blank' className="text-white transition-all group-hover:text-[#FFE600]" href="https://linkedin.dj-jay.in"><i className="ti-linkedin"></i></a></li>
                                <li className="text-white float-left group ml-[15px]"><a rel='noopener noreferrer' target='_blank' className="text-white transition-all group-hover:text-[#FFE600]" href="https://github.dj-jay.in"><i className="ti-github"></i></a></li>
                                <li className="text-white float-left group ml-[15px]"><a rel='noopener noreferrer' target='_blank' className="text-white transition-all group-hover:text-[#FFE600]" href="https://instagram.dj-jay.in"><i className="ti-instagram"></i></a></li>
                            </ul>
                        </div>

                        <div className="w-[200px] md:w-full ml-auto md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Navigation</h3>
                            </div>
                            <ul>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="about" spy={true} smooth={true} duration={500}>About me</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="contact" spy={true} smooth={true} duration={500}>Contact me</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="blog" spy={true} smooth={true} duration={500}>Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="pl-[15px] md:pl-[0px] md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">All Services</h3>
                            </div>
                            <ul>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="service" spy={true} smooth={true} duration={500}>Web Delepment</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="service" spy={true} smooth={true} duration={500}>App Development</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="service" spy={true} smooth={true} duration={500}>Software Development</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="service" spy={true} smooth={true} duration={500}>Server Deployment</Link></li>
                            </ul>
                        </div>
                        <div className=" md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Newsletter</h3>
                            </div>
                            <p className="text-white text-[16px] mb-[10px]">Must explain to you how all this mistaken idea pleasure born and give you a complete account.</p>
                            <form className=" mt-[25px] relative" onSubmit={SubmitHandler}>
                                <div className="input-1">
                                    <input type="email" className="focus:outline-0 w-full bg-[#232925] h-[50px]  text-white py-[6px] px-[15px] border border-[#222623]" placeholder="Email Address *" required />

                                </div>
                                <div className="absolute right-[20px] top-[50%]  -translate-y-1/2">
                                    <button className=" text-white text-[20px]" type="submit"><i className="ti-email"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="absolute top-[-140%] right-[0] -z-10">
                    <svg className="fill-[#59C378]" width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="wraper">
                <div className=" border-t-1 border-[#ffffff0d] relative">
                    <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
                    <p className="text-center text-white text-[14px] py-[20px]">Copyright &copy; 2025 Jay Chauhan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;