import Link from "next/link";

export default function Social({ children, ...props}) {
    return (
        <div className="hover:origin-top-left hover:rotate-12 transition-all">
            {children}
        </div>
    )
}