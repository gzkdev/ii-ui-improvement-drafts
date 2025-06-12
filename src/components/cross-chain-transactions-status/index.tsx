import { Bell } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function CrossChainTransactionsStatus() {
  return (
    <>
      <div className="contents md:hidden">
        <Drawer>
          <DrawerTrigger className="flex items-center justify-center cursor-pointer size-10">
            <Bell className="size-5" />
          </DrawerTrigger>
          <DrawerContent className="w-full border">
            <DrawerHeader>
              <DrawerTitle className="text-start">
                Cross-chain Transactions Status
              </DrawerTitle>
            </DrawerHeader>

            <div className="min-h-72 px-4">
              <p className="text-neutral-500 text-sm">Empty Transactions</p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden md:contents">
        <Popover>
          <PopoverTrigger className="flex items-center justify-center cursor-pointer size-10">
            <Bell className="size-5" />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            alignOffset={-24}
            sideOffset={16}
            className="w-96 border px-4 space-y-4 h-[90vh] rounded-xl"
          >
            <div className="text-lg font-medium">
              Cross-chain Transactions Status
            </div>
            <p className="text-neutral-500 text-sm">Empty Transactions</p>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
