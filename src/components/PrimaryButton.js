import Link from "next/link"

export default function PrimaryButton({children, ...props}) {
    return (
        <Link {...props} className="rounded-full text-white bg-[#101010] px-6 py-2.5 text-center text-sm font-medium shadow-sm transition-all hover:bg-opacity-80">
            {children}
        </Link>
    )
}