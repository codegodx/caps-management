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
} from "@nextui-org/react";
import { Cmlogo } from "@/public/cmlogo";
import { Navmenu } from "@/CONFIG/site";
import { usePathname } from "next/navigation";

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const path = usePathname();

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
    <Navbar shouldHideOnScroll={true} isBordered={true} isBlurred={true} classNames={{base: "bg-[#0E0E0E]/20"}}  onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Cmlogo
            className="w-10 h-10 hidden sm:block"
            bodyLogoClassName="fill-[#E9E9E9]"
            outlineLogoClassName="fill-[#544F4D]"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
      <Cmlogo
        className="w-10 h-10"
        bodyLogoClassName="fill-[#E9E9E9]"
        outlineLogoClassName="fill-[#544F4D]"
      />

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
      
        {Navmenu.map((item, index) => (
          <NavbarItem key={`${index}`}>
            <Link
              color={path === item.link ? "success" : "warning"}
              href={item.link}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {Navmenu.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={path === item.link ? "success" : "warning"}
              href={item.link}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
