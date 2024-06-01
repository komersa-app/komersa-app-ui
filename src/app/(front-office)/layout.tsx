import { ReactNode } from "react";
import Navbar from "../components/hero/Navbar";

export default function FrontOfficeLayout({ children }: { children: ReactNode }){
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}