import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto">
            <div className="md:block md:justify-between">
                <div>
                    <h4 className="text-3xl underline font-bold my-6 md:my-0">My Portfolio</h4>
                </div>
                <br />
                <div className="px-2 text-xl font-bold flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">About Me</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#portfolio">Portfolio</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <Separator className="my-4"/>
                <div>&copy; 2024 | Landing Page by Juan Camero</div>
            </div>
        </footer>
    );
}

export default Footer;