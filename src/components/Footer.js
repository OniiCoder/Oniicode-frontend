import Socials from "./Socials"

export default function Footer() {
    return (
        <div className="px-5 flex flex-col lg:flex-row flex-col-reverse justify-between gap-6 items-center py-6 text-sm lg:text-base text-dull-gray text-center">
            <div>&copy; Copyright Oniicode, {new Date().getFullYear()}. All rights reserved. </div>
            <Socials />
        </div>
    )
}