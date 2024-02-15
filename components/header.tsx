'use client'

import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { Container } from "../util/container";
// import { useTheme } from ".";
// import { Icon } from "../util/icon";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../tina/__generated__/types";
import { client } from "../tina/__generated__/databaseClient";

const Header = ( {data} : { data: GlobalHeader }) => {
  // const { pathname } = useRouter();
  const pathname = usePathname();

  console.log(pathname);
  

  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);

  }, []);

  // component
  const Nav = (
      { 
        navItem,
        alignment
      }
      :
      {
        navItem: any,
        alignment: string
      }
    ) => (
    <ul className={`flex gap-6 sm:gap-8 lg:gap-10 ${alignment}`}>
      {navItem &&
        navItem.map((item, i) => {
          const activeItem =
            (item.href === "home"
              ? pathname === "/"
              : pathname?.includes(item.href)) && isClient;
          return (
            <li
              key={`${item.label}-${i}`}
              className={`${
                activeItem ? "font-bold" : ""
              }`}
            >
              <Link
                data-tina-field={tinaField(item, "label")}
                href={`/${item.href === "home" ? '/' : item.href}`}
                className={`relative inline-block text-black tracking-wide transition duration-150 ease-out hover:opacity-100 py-8 px-4 ${
                  activeItem ? `` : `opacity-70`
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
    </ul>
  );

  return (
    <div
      className={`header relative py-8 items-center justify-center grid grid-cols-3 container mx-auto`}
    >
      <Nav navItem={data.nav} alignment="justify-start"/>
      <div className="logoContainer flex justify-center items-center">
        {
          data!.image!.src ? 
          <Link
            href="/"
            className="relative block h-[31px] w-[309px]"
          >
            <Image
              src={data!.image!.src}
              alt='Resonator Logo'
              fill
              style={{objectFit:"cover"}}
              />
          </Link> : null
        }
      </div>
      <Nav navItem={data.navRight} alignment="justify-end" />
      
    </div>
  );
};

export default Header;