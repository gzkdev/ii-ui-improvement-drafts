"use client";

import Link from "next/link";
import Image from "next/image";

import CrossChainTransactionsStatus from "../cross-chain-transactions-status";
import AccountDetails from "../account-details";
import DelegatedWallets from "../delegated-wallets";
import Navigation from "@/components/navigation";

export default function Navbar() {
  return (
    <div>
      <div className="max-w-7xl text-sm mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center xl:gap-4">
          <Link href="/">
            <span className="sr-only">Home</span>
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="logo"
              className="size-10"
              priority
            />
          </Link>
          <Navigation />
        </div>
        <div className="flex items-center md:gap-2">
          <CrossChainTransactionsStatus />
          <DelegatedWallets />
          <AccountDetails />
        </div>
      </div>
    </div>
  );
}
