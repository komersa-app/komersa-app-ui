'use client'
import Link from "next/link";
import CustomButton from "../button/Button";
import { links } from "../utils/Link";
import Lottie from "lottie-react";
import animationData from "../../lottie/Animation - 1717797545007.json";



export default function Navbar(){
    return (
        <nav className="navbar bg-base-100 py-3 px-10 rounded-r-lg rounded-br-lg rounded-bl-lg  border-b-1 border-black ">
            <div className="navbar-start" style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
                <Link href="/">
                     <span className=" bg-clip-text font-bold text-3xl font-sans ml-24 ">SWIFT</span>

                </Link>
                <Lottie animationData={animationData} loop={true} autoplay={true} className="w-20 h-20" />
            </div>
            <div className="navbar-center hidden lg:flex bg-white font-sans font-semibold">
                <ul className="menu menu-horizontal">{
                    links.map((link,i )=><li key={i} className="text-base"><Link href={link.link}>{link.name}</Link></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-45 ">{
                        links.map((link,i )=><li key={i} className="text-base"><Link href={link.link}>{link.name}</Link></li>)
                        }
                    </ul>
                </div>
                <CustomButton style="rounded-full  bg-white font-sans font-semibold" type="button" >Sign in</CustomButton>
            </div>
        </nav>
    );
} 