import Link from "next/link";
import { MenuIcon } from "lucide-react";
import NavigationLinks from "./navigation-links";
import { NAVBAR_LINKS } from "@/constants/navbar";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Navigation() {
  return (
    <>
      <div className="hidden xl:block">
        <DesktopNavigation />
      </div>
      <div className="md:hidden">
        <MobileNavigation />
      </div>
      <div className="hidden md:block xl:hidden">
        <TabletNavigation />
      </div>
    </>
  );
}

function DesktopNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-2 font-medium">
        {NAVBAR_LINKS.map((link) => {
          return (
            <NavigationMenuItem key={link.label}>
              <NavigationMenuLink className="text-base" asChild>
                <Link href={link.value}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNavigation() {
  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer flex items-center justify-center size-10 rounded-full">
        <MenuIcon className="size-5" />
      </DrawerTrigger>
      <DrawerContent className="w-full px-6 pb-12 space-y-6">
        <DrawerHeader className="p-0 *:text-start">
          <DrawerTitle>App</DrawerTitle>
        </DrawerHeader>
        <NavigationLinks />
      </DrawerContent>
    </Drawer>
  );
}

function TabletNavigation() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-center size-10 rounded-full cursor-pointer">
        <MenuIcon className="size-5" />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 border px-0">
        <NavigationLinks />
      </PopoverContent>
    </Popover>
  );
}
