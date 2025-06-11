import Image from "next/image";
import Link from "next/link";

import { NAVBAR_LINKS } from "@/constants/navbar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  ArrowDown,
  Bell,
  ChevronDown,
  MenuIcon,
  WalletCards,
} from "lucide-react";

function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden xl:block">
      <NavigationMenuList className="flex items-center gap-2">
        {NAVBAR_LINKS.map((link) => {
          if (link.options && link.options.length > 0) {
            return (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    {link.options.map((link) => {
                      return (
                        <NavigationMenuLink
                          className="min-w-max"
                          key={link.label}
                          asChild
                        >
                          <Link href={link.value}>{link.label}</Link>
                        </NavigationMenuLink>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuLink key={link.label} asChild>
              <Link href={link.value}>{link.label}</Link>
            </NavigationMenuLink>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NotDesktopNavigationContent() {
  return (
    <>
      <NavigationMenu
        orientation="vertical"
        className="flex-col items-start max-w-full *:w-full"
        viewport={false}
      >
        <NavigationMenuList className="block *:text-base px-2">
          {NAVBAR_LINKS.map((link) => {
            const hasOptions = link.options && link.options.length > 0;

            if (!hasOptions) {
              return (
                <NavigationMenuLink key={link.label} asChild>
                  <Link className="w-full" href={link.value}>
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              );
            }

            return (
              <Collapsible key={link.label} className="w-full">
                <NavigationMenuItem className="w-full">
                  <CollapsibleTrigger asChild>
                    <NavigationMenuTrigger className="w-full justify-start px-2">
                      {link.label}
                    </NavigationMenuTrigger>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="contents">
                    <ul className="ml-4">
                      {link.options.map((link) => {
                        return (
                          <NavigationMenuLink key={link.label} asChild>
                            <Link href={link.value}>{link.label}</Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </ul>
                  </CollapsibleContent>
                </NavigationMenuItem>
              </Collapsible>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-col gap-2 px-4">
        <span className="text-xs font-medium leading-none">Socials</span>
        <ul className="flex items-center gap-2">
          {[1, 2, 3].map((i) => {
            return (
              <div key={i} className="size-6 bg-neutral-300 rounded-full" />
            );
          })}
        </ul>
      </div>
    </>
  );
}

function MobileNavigation() {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden flex items-center justify-center size-10 rounded-full cursor-pointer">
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="w-full">
        <DrawerHeader>
          <DrawerTitle className="text-start">App</DrawerTitle>
        </DrawerHeader>

        <div className="space-y-6 pb-12">
          <NotDesktopNavigationContent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function TabletNavigation() {
  return (
    <Popover>
      <PopoverTrigger className="hidden md:flex items-center justify-center size-10 rounded-full cursor-pointer xl:hidden">
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 border px-0">
        <NotDesktopNavigationContent />
      </PopoverContent>
    </Popover>
  );
}

function Notifications() {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center cursor-pointer">
        <Bell />
      </DrawerTrigger>
      <DrawerContent className="w-full border">
        <DrawerHeader>
          <DrawerTitle className="text-start">
            Cross-chain Transactions Status
          </DrawerTitle>
        </DrawerHeader>

        <div className="space-y-6 pb-12 min-h-48">
          {/* Notfications Content */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function DelegatedWallets() {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center cursor-pointer">
        <WalletCards />
      </DrawerTrigger>
      <DrawerContent className="w-full border">
        <DrawerHeader>
          <DrawerTitle className="text-start">Delegated Wallets</DrawerTitle>
        </DrawerHeader>

        <div className="space-y-6 pb-12 min-h-48">
          {/* Delegated Wallets Content */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function AccountDetails() {
  return (
    <Drawer>
      <DrawerTrigger
        className="bg-neutral-300/50 flex items-center justify-center gap-1 p-2 rounded-xl cursor-pointer"
        // asChild
      >
        <Avatar className="size-7">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <ChevronDown size={16} />
        {/* <button className="bg-neutral-700 rounded-full px-4 py-2 text-neutral-100 text-sm font-semibold cursor-pointer">
          Connect
        </button> */}
      </DrawerTrigger>

      <DrawerContent className="w-full border">
        <DrawerHeader>
          <DrawerTitle className="text-start">Account Details</DrawerTitle>
        </DrawerHeader>

        <div className="space-y-6 pb-12 min-h-48">
          {/* Account Details Content */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function NavbarAccountControls() {
  return (
    <div className="flex items-center gap-4">
      {/* <button>
        <Bell />
      </button>
      <button>
        <WalletCards />
      </button>

      <button className="bg-neutral-300/50 flex items-center gap-2 py-1 px-2 rounded-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <ChevronDown size={16} />
      </button> */}
      <Notifications />
      <DelegatedWallets />
      <AccountDetails />
    </div>
  );
}

export default function Navbar() {
  return (
    <div>
      <div className="max-w-7xl text-sm mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center xl:gap-4">
          <Link href="/">
            <span className="sr-only">Home</span>
            <Image src="/logo.png" width={48} height={48} alt="logo" />
          </Link>
          <DesktopNavigation />
          <MobileNavigation />
          <TabletNavigation />
        </div>
        <NavbarAccountControls />
      </div>
    </div>
  );
}
