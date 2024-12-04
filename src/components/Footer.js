import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
    return (
        <div className="flex justify-between items-center py-6">
            <div>&copy; Copyright Oniicode, 2024. All rights reserved. </div>
            <Socials />
        </div>
    )
}