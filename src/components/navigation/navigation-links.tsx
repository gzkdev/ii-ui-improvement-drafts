import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { NAVBAR_LINKS, SOCIALS } from "@/constants/navbar";

export default function NavigationLinks() {
  return (
    <>
      <NavigationMenu
        orientation="vertical"
        className="block max-w-full *:w-full"
      >
        <NavigationMenuList className="block space-y-3 text-neutral-500">
          {NAVBAR_LINKS.map((link) => {
            return (
              <NavigationMenuLink
                key={link.label}
                className="hover:bg-transparent text-lg font-medium focus-visible:bg-transparent p-0"
                asChild
              >
                <Link className="w-full" href={link.value}>
                  {link.label}
                </Link>
              </NavigationMenuLink>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium leading-none">Socials</span>
        <ul className="flex items-center gap-2">
          {SOCIALS.map((social) => {
            return (
              <Link
                key={social.label}
                href={social.value}
                title={social.label}
                className="size-6 bg-neutral-300 rounded-full"
              ></Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
