import Link from 'next/link'

export default function FeaturedBlog() {
    const projects = [
        {
            id: 1,
            date: 'Feb 07, 2024',
            image: 'https://res.cloudinary.com/heyset/image/upload/v1721733939/vibraniuumtech/Xnapper-2024-07-23-11.22.11.png',
            title: 'Do not make these mistakes as a newbie',
            description:
                'Currently building and running a platform that helps small businesses, service providers and creators manage bookings and collect payments.',
            link: 'https://buukmenow.com',
        },
        {
            id: 2,
            date: 'Feb 07, 2024',
            image: 'https://res.cloudinary.com/heyset/image/upload/v1725199664/vibraniuumtech/loomlab_art.png',
            title: 'Grow your income',
            description:
                'A mobile app that allows users users generate images and flyers with prompts.',
            link: 'https://testflight.apple.com/join/QNmRjxDC',
        },
        {
            id: 3,
            date: 'Feb 07, 2024',
            image: 'https://res.cloudinary.com/heyset/image/upload/v1721733943/vibraniuumtech/Xnapper-2024-07-23-11.21.42.png',
            title: 'How to use code to become financially free',
            description:
                'A mobile and web application that allows users browse PMS, Diesel and Gas prices from depots accross Nigeria and place order.',
            link: 'https://petrolpadi.com',
        },
    ]
    return (
        <div className="grid text-xl pb-[64px] px-5">
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 text-[24px] font-sans text-black font-bold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 9.5H17"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 14.5H14"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Blog posts
                </div>

                <div className="grid gap-4">
                    {projects &&
                        projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`flex flex-col ${index % 2 != 0 ? 'flex-col-reverse' : ''} justify-between gap-[11px] bg-white rounded-[12px]`}>
                                <div className="grid lg:flex items-start gap-2 lg:gap-6">
                                    <div className="shrink-0 text-xs">
                                        {project.date}
                                    </div>
                                    <div className="flex-grow flex gap-3">
                                        <img
                                            className="w-[60px] h-[60px] rounded-[4px] object-cover"
                                            src={project.image}
                                        />
                                        <div className="grid">
                                            <div className="text-base lg:text-lg font-medium line-clamp-1 lg:line-clamp-3">
                                                {project.title}
                                            </div>
                                            <div className="text-sm lg:text-base text-dull-gray line-clamp-1 lg:line-clamp-3">
                                                {project.description}
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="shrink-0 flex gap-2 justify-between items-center text-sm font-medium">
                                        Read more
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467"
                                                stroke="#292929"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.33334 8H13.5533"
                                                stroke="#292929"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
                <Link
                    href="https://vibraniuumtech.com"
                    target="_blank"
                    className="flex gap-2 items-center text-base font-medium underline">
                    See more posts
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467"
                            stroke="#292929"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.33334 8H13.5533"
                            stroke="#292929"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
