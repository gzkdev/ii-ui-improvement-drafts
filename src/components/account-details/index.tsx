import Avatar from "boring-avatars";
import { Copy } from "lucide-react";
import { TOKEN_BALANCES } from "@/constants/navbar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function AccountDetails() {
  return (
    <>
      <div className="contents md:hidden">
        <Drawer>
          <DrawerTrigger className="flex items-center justify-center cursor-pointer size-10">
            <Avatar size={28} name="John Doe" variant="marble" />
          </DrawerTrigger>

          <DrawerContent className="w-full px-4 pb-6 space-y-6">
            <DrawerHeader className="p-0 *:text-start">
              <DrawerTitle>Connected Account</DrawerTitle>
            </DrawerHeader>
            <AccountDetailsContent />
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden md:contents">
        <Popover>
          <PopoverTrigger className="flex items-center justify-center cursor-pointer size-10">
            <Avatar size={28} name="John Doe" variant="marble" />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            alignOffset={-24}
            sideOffset={16}
            className="w-72 border px-4 space-y-6 rounded-xl"
          >
            <AccountDetailsContent />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

function TokenBalanceInfo({
  token,
  balance,
}: {
  token: string;
  balance: string;
}) {
  return (
    <div className="flex items-end justify-between text-xs gap-1 text-neutral-500">
      <div>{token}</div>
      <div className="grow h-1.5 border-t border-t-current border-dotted"></div>
      <div className="text-neutral-950">{balance}</div>
    </div>
  );
}

function AccountDetailsContent() {
  return (
    <>
      <div className="flex gap-4 items-center">
        <Avatar size={40} name="John Doe" variant="marble" />
        <div className="space-y-0">
          <div className="flex items-baseline gap-2 text-sm">
            0x1234567890
            <button className="flex items-center justify-center cursor-pointer">
              <Copy size={14} />
            </button>
          </div>
          <div className="text-neutral-500 text-xs">Arbitrum Sepolia</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium leading-none">
          Available Balances
        </div>
        {TOKEN_BALANCES.map((token) => (
          <TokenBalanceInfo
            key={token.symbol}
            token={token.symbol}
            balance={token.balance}
          />
        ))}
      </div>

      <button className="w-full flex items-center justify-center py-2 rounded-full bg-red-100 text-red-500 font-semibold cursor-pointer">
        Disconnect
      </button>
    </>
  );
}
