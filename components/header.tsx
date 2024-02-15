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
  const router = useRouter();
  console.log(data);
  

  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);

  }, []);

  // component
  // const Nav = ({navItem} : {navItem: any}) => (
  //   <ul className="flex gap-6 sm:gap-8 lg:gap-10 tracking-[.002em] -mx-4">
  //     {navItem &&
  //       navItem.map((item, i) => {
  //         const activeItem =
  //           (item.href === ""
  //             ? router.asPath === "/"
  //             : router.asPath.includes(item.href)) && isClient;
  //         return (
  //           <li
  //             key={`${item.label}-${i}`}
  //             className={`${
  //               activeItem ? activeItemClasses[theme.color] : ""
  //             }`}
  //           >
  //             <Link
  //               data-tina-field={tinaField(item, "label")}
  //               href={`/${item.href}`}
  //               className={`relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 py-8 px-4 ${
  //                 activeItem ? `` : `opacity-70`
  //               }`}
  //             >
  //               {item.label}
  //               {activeItem && (
  //                 <svg
  //                   className={`absolute bottom-0 left-1/2 w-[180%] h-full -translate-x-1/2 -z-1 opacity-10 dark:opacity-15 ${
  //                     activeBackgroundClasses[theme.color]
  //                   }`}
  //                   preserveAspectRatio="none"
  //                   viewBox="0 0 230 230"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <rect
  //                     x="230"
  //                     y="230"
  //                     width="230"
  //                     height="230"
  //                     transform="rotate(-180 230 230)"
  //                     fill="url(#paint0_radial_1_33)"
  //                   />
  //                   <defs>
  //                     <radialGradient
  //                       id="paint0_radial_1_33"
  //                       cx="0"
  //                       cy="0"
  //                       r="1"
  //                       gradientUnits="userSpaceOnUse"
  //                       gradientTransform="translate(345 230) rotate(90) scale(230 115)"
  //                     >
  //                       <stop stopColor="currentColor" />
  //                       <stop
  //                         offset="1"
  //                         stopColor="currentColor"
  //                         stopOpacity="0"
  //                       />
  //                     </radialGradient>
  //                   </defs>
  //                 </svg>
  //               )}
  //             </Link>
  //           </li>
  //         );
  //       })}
  //   </ul>
  // )

  return (
    <div
      className={`header relative overflow-hidden bg-gradient-to-b py-8 flex items-center justify-center`}
    >
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
  );
};

export default Header;