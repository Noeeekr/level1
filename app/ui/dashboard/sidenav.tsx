import NavLinks from './nav-links';

export interface NavbarItem {
    product_name: string,
    product_url: string
}

export default function SideNav() {

    return(
        <div className="flex md:flex-col w-full h-full">
            <div className="flex items-end p-2 text-lg text-white bg-blue-500 rounded-b-sm w-full max-w-40 h-full max-h-full md:max-w-full md:max-h-28">
                LOGOTYPE
            </div>
            <nav className=" w-full h-full">
                <ul className="flex items-center md:flex-col w-full h-full">
                    <NavLinks/>
                </ul>
            </nav>
        </div>
    )
}