import Link from "next/link";
import CustomButton from "../button/Button";

let links = [{
        name: "Home",
        link:"/"
    },{
        name: "View all cars",
        link: "/cars"
    },{
        name: "Contact us",
        link: "/contact"
    }]

export default function Navbar(){
    return (
        <nav className="navbar bg-base-100 py-3 px-10">
            <div className="navbar-start">
                <Link href="/">
                     <span className="bg-gradient-radial text-transparent from-green-300 via-blue-500 to-purple-600 bg-clip-text font-bold text-3xl">Car Sale</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
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
                <CustomButton style="rounded-full text-blue-500 bg-white" type="button" >Sign in</CustomButton>
            </div>
        </nav>
    );
} 