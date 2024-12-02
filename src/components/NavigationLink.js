import Link from 'next/link'

const NavigationLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`inline-flex items-center px-[12px] py-[8px] text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'bg-[#F5F5F5] rounded-md'
                : 'text-dull-gray'
        }`}>
        {children}
    </Link>
)

export default NavigationLink
