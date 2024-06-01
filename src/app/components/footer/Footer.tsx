import Link from "next/link";
import { links } from "../utils/Link";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer footer-center py-3 bg-base-200">
            <div className="grid grid-flow-col gap-3">
                {
                    links.map((link, i) => <Link key={i} href={link.link} className="link link-hover text-base">{link.name}</Link>)
                }
            </div>
            <div>
                <div className="grid grid-flow-col gap-3">
                    <Link target="_blank"  href="https://github.com/komersa-app/komersa-app-ui" ><FaGithub size={20} className="w-10 h-10" /></Link>
                    <Link target="_blank" href="https://facebook.com" ><FaFacebookF size={20} className="w-10 h-10" /></Link>
                    <Link target="_blank" href="https://youtube.com" ><FaYoutube size={20} className="w-10 h-10" /></Link>
                </div>
            </div>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved </p>
            </aside>
        </footer>
    );
}