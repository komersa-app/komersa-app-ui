import { ReactNode } from "react";
import Navbar from "@/components/hero/Navbar";
import Footer from "@/components/footer/Footer";

export default function FrontOfficeLayout({ children }: { children: ReactNode }){
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}