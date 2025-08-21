import Link from "next/link"

export default function PrimaryButton({children, className = "", ...props}) {
    const baseClasses = "rounded-full text-white bg-[#101010] px-6 py-2.5 text-center text-sm font-medium shadow-sm transition-all hover:bg-opacity-80"
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses
    
    return (
        <Link {...props} className={combinedClasses}>
            {children}
        </Link>
    )
}