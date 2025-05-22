"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";

export function AcmeLogo() {
  return (
    <svg fill="none" height="60" viewBox="0 0 32 32" width="60">
      <path
        className="fill-yellow-500"
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    // <Navbar className="bg-indigo-800 " id="navbar">
    //   <NavbarContent justify="start">
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //       className="sm:hidden"
    //     />
    //     <NavbarBrand>
    //       <AcmeLogo />
    //       <p className="font-bold text-3xl text-white">
    //         Sunshine Financial Group
    //       </p>
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent justify="end">
    //     <NavbarItem>
    // <Button
    //   href="/login"
    //   as={Link}
    //   color="warning"
    //   variant="flat"
    //   className="flex items-center gap-5 self-start rounded-xl bg-white px-6 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-indigo-400 hover:text-white md:text-base"
    // >
    //   Login
    // </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarMenu>
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item}-${index}`}>
    //         <Link
    //           className="w-full"
    //           color={
    //             index === 2
    //               ? "primary"
    //               : index === menuItems.length - 1
    //               ? "danger"
    //               : "foreground"
    //           }
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>
    <div className="bg-blue-100 flex items-center md:px-12 py-2 justify-between ">
      <div className="flex items-center md:px-5">
        {/* <AcmeLogo />
        <p className="font-bold md:text-3xl text-white text-xl">
          Sunshine Financial Group
        </p> */}
        <Image
          src="/logo.png"
          width={180}
          height={130}
          className=""
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="flex justify-end md:mr-12 md:pr-12 p-6">
        <Button
          href="/login"
          as={Link}
          color="warning"
          variant="flat"
          className="flex items-center gap-5 self-start rounded-xl bg-white px-6 py-3 text-sm font-medium text-white transition-colors bg-green-800 hover:bg-green-600 hover:text-white md:text-base"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
