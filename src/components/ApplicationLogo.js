import Image from 'next/image'

const ApplicationLogo = () => (
    <div className={`flex items-center gap-[12px] font-sans`}>
        <Image
            className="w-[40px] h-[40px] rounded-md object-cover"
            src="https://res.cloudinary.com/heyset/image/upload/f_auto/c_scale,w_1000/v1/vibraniuumtech/MacBook_Air_-_14?_a=BAAAROBs"
            alt="MacBook Air"
            width={40}
            height={40}
            quality={100}
        />
        <span className="text-2xl font-medium"> Oniicode</span>
    </div>
)

export default ApplicationLogo
