import { Phone } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="About me" subtitle="Would you know about me?" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image 
                                            src={data.url} 
                                            alt="Image" 
                                            width={250} height={400} 
                                            className="w-full h-auto rounded-lg" 
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8">I am a passionate intern developer with a deep love for new technologies 
                        and a strong desire to create innovative solutions. When I am not coding, you can find me 
                        jamming with my rock band, hitting the basketball court, or diving into fascinating articles 
                        about music and science. As a dedicated family man, I strive to balance my professional 
                        aspirations with my personal life, drawing inspiration from both my experiences as a 
                        musician and my role as a father. Join me on this journey as I explore the intersection 
                        of technology, creativity, and family life!</p>
                    <Button>
                        <Phone size={20} className="mr-2" />Contact me  
                    </Button>
                </div>

            </div>
        </div>
    );

}

export default AboutMe;