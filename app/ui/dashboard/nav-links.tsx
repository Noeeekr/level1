"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { NavbarItem } from './sidenav';

const items: NavbarItem[] = [
    {
        product_name: "Home",
        product_url: "/home"
    },
    {
        product_name: "Invoices",
        product_url: "/dashboard/invoices"
    },
    {
        product_name: "Costumers",
        product_url: "/dashboard/costumers"
    }
]

export default function NavLinks() {

    const pathname = usePathname();

    return (
        <>
            {items.length 
                ? items.map((item,index) => {
                    return <Link key={index} className={clsx(
                                "flex p-2 items-center h-full md:w-full flex-1 md:h-12 md:flex-none hover:bg-slate-950/5",
                                {
                                    "hover:bg-sky-200": pathname === item.product_url
                                }
                            )} href={item.product_url}>  
                                <li className={clsx(
                                    "text-sm cursor-pointer",
                                    {
                                        "text-blue-900": pathname === item.product_url,
                                    }
                                    )}
                                >                   
                                    {item.product_name}
                                </li>
                            </Link>
                })  
                : "no menu items found"
            }
        </>
    )
}