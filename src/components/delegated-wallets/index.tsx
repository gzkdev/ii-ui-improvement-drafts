import { WalletCards } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function DelegatedWallets() {
  return (
    <>
      <div className="contents md:hidden">
        <Drawer>
          <DrawerTrigger className="flex items-center justify-center cursor-pointer size-10">
            <WalletCards className="size-5" />
          </DrawerTrigger>
          <DrawerContent className="w-full border md:hidden">
            <DrawerHeader>
              <DrawerTitle className="text-start">
                Delegated Wallets
              </DrawerTitle>
            </DrawerHeader>

            <div className="space-y-6 pb-12 min-h-48 px-4">
              <p className="text-neutral-500 text-sm">Empty Wallets</p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden md:contents">
        <Popover>
          <PopoverTrigger className="flex items-center justify-center cursor-pointer size-10">
            <WalletCards className="size-5" />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            alignOffset={-24}
            sideOffset={16}
            className="w-96 border px-4 space-y-4 min-h-[50vh] rounded-xl"
          >
            <div className="text-lg font-medium">Delegated Wallets</div>
            <p className="text-neutral-500 text-sm">Empty Wallets</p>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
