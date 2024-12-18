import Layout2 from '@/app/(auth)/layout2'

const Resources = () => {
    return (
        <Layout2>
            <div className="mt-4 px-5">
                <div className="mt-4 flex gap-2 text-[24px] font-sans text-black font-bold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
                            stroke="#292929"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 5.48999V20.49"
                            stroke="#292929"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.75 8.48999H5.5"
                            stroke="#292929"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.5 11.49H5.5"
                            stroke="#292929"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Resources
                </div>
                <div className="grid grid-cols-2">
                    <p className="text-sm lg:text-base text-dull-gray">
                        A curated collection of tools, apps, docs, people and
                        references that power my development workflow and
                        adventures.
                    </p>
                </div>
                <div className="mt-4 inline-flex">
                    <div className="flex items-center gap-[11px] border-[1px] border-[#E2E2E2] rounded-full p-2">
                        <div>
                            <div className="bg-[#FAB12F] w-2 h-2 rounded-full"></div>
                        </div>
                        <div className="text-xs">coming soon</div>
                    </div>
                </div>
            </div>
        </Layout2>
    )
}

export default Resources
