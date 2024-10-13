import Link from "next/link";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Container from "./shared/container";


const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello! I´m</h3>
                <h1 className="text-4xl font-bold mb-3">Juan Camero &#123; JCDev &#125;</h1>
                <h2 className="text-2xl text-gray-400">A Full Stack Intern Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contact
                        </Link> 
                        <Link className={buttonVariants({variant: 'secondary'})} 
                            href="/cv-jcdev.pdf" 
                            target="_blank">
                            <Paperclip className="mr-2" /> Download CV
                        </Link>
                    </div>
                </div>
                <div className="my-20 flex justify-center items-center">
                    <Image 
                        src="/fotoPerfil3.jpg" 
                        alt="Profile pic" 
                        className="h-full rounded-full border-8 border-white"
                        width={300} height={300}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Introduction;
