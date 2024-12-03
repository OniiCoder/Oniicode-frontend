import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

export default function Featured() {
    const projects = [
        {
            "id": 1,
            "image": "https://res.cloudinary.com/heyset/image/upload/v1721733939/vibraniuumtech/Xnapper-2024-07-23-11.22.11.png",
            "title": "BuukMeNow",
            "description": "Currently building and running a platform that helps small businesses, service providers and creators manage bookings and collect payments.",
            "link": "https://buukmenow.com"
        },
        {
            "id": 2,
            "image": "https://res.cloudinary.com/heyset/image/upload/v1725199664/vibraniuumtech/loomlab_art.png",
            "title": "LoomLab AI",
            "description": "A mobile app that allows users users generate images and flyers with prompts.",
            "link": "https://testflight.apple.com/join/QNmRjxDC"
        },
        {
            "id": 3,
            "image": "https://res.cloudinary.com/heyset/image/upload/v1721733943/vibraniuumtech/Xnapper-2024-07-23-11.21.42.png",
            "title": "Petrol Padi",
            "description": "A mobile and web application that allows users browse PMS, Diesel and Gas prices from depots accross Nigeria and place order.",
            "link": "https://petrolpadi.com"
        },
    ];
    return (
        <div className="grid text-xl pb-[64px]">
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 text-[24px] font-sans text-black font-bold">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.01 2.91995L18.91 5.53995C20.61 6.28995 20.61 7.52995 18.91 8.27995L13.01 10.8999C12.34 11.1999 11.24 11.1999 10.57 10.8999L4.67002 8.27995C2.97002 7.52995 2.97002 6.28995 4.67002 5.53995L10.57 2.91995C11.24 2.61995 12.34 2.61995 13.01 2.91995Z" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Featured
                </div>
                
                <div className="grid grid-cols-3 gap-4 bg-[#F5F5F5] rounded-[24px] p-[12px]">
                    {projects && projects.map((project, index) =>(
                        <div 
                            key={project.id}
                            className={`flex flex-col ${index % 2 != 0 ? 'flex-col-reverse' : ''} justify-between gap-[11px] bg-white rounded-[12px]`}>
                            <div className="grid gap-6 px-5 py-5">
                                <div className="grid gap-3">
                                    <div className="text-[18px] font-medium">{project.title}</div>
                                    <div className="text-base text-dull-gray">{project.description}</div>
                                </div>
                                <Link 
                                    href={project.link}
                                    target="_blank"
                                    className="flex justify-between items-center text-sm font-medium">
                                    View Project
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="#292929" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.33334 8H13.5533" stroke="#292929" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </Link>
                            </div>
                            <img className="w-full h-[324px] rounded-[12px] object-cover" src={project.image} />
                        </div>
                    ))}
                </div>
                <Link 
                    href="https://vibraniuumtech.com"
                    target="_blank"
                    className="flex gap-2 items-center text-base font-medium underline">
                    See more projects
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="#292929" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.33334 8H13.5533" stroke="#292929" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </Link>
            </div>
            <div></div>
        </div>
    )
}