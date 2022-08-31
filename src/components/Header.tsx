import { ClockIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CurrentDay from "./CurrentDay";

export default function Header() {
  return (
    <header className="px-4 pt-4 bg-main space-y-3">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-webapp text-lg font-bold text-onyx">نتایج زنده</h1>
        <ClockIcon className="w-7 h-7 text-onyx" />
      </div>
      <div className="relative">
        <MagnifyingGlassIcon className="w-4 h-4 absolute top-2 right-4 text-smoky-black" />
        <input
          type="search"
          placeholder="جستجو"
          className="form-input py-[6px] pr-10 text-smoky-black placeholder:text-smoky-black placeholder:text-sm px-2 border-0 w-full rounded-md focus:outline-none focus:ring-0 font-webapp placeholder:font-webapp bg-tertiary"
        />
      </div>

      <CurrentDay />
    </header>
  );
}
