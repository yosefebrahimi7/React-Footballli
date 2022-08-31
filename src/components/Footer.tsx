import FootballField from "./icons/FootballField";
import { MdOutlineExplore } from "react-icons/md";
import { RiFootballLine } from "react-icons/ri";
import Cup from "./icons/Cup";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-main w-full absolute bottom-0 px-5 py-3 flex items-center justify-between">
      <div className="flex flex-col gap-1 cursor-pointer">
        <UserIcon className="w-8 h-6 text-smoky-black rounded-md" />
        <span className="font-webapp text-xs text-smoky-black">پروفایل</span>
      </div>

      <div className="flex flex-col gap-1 cursor-pointer">
        <Cup className="w-8 h-6 text-smoky-black rounded-md" />
        <span className="font-webapp text-xs text-smoky-black">لیگ‌ها</span>
      </div>

      <div className="flex flex-col gap-1 cursor-pointer">
        <RiFootballLine className="w-8 h-6 text-smoky-black rounded-md" />
        <span className="font-webapp text-xs text-smoky-black">فوتبان</span>
      </div>

      <div className="flex flex-col gap-1 cursor-pointer">
        <MdOutlineExplore className="w-8 h-6 text-smoky-black rounded-md" />
        <span className="font-webapp text-xs text-smoky-black">اکتشاف</span>
      </div>

      <div className="flex flex-col gap-1 cursor-pointer">
        <FootballField className="w-8 h-6 text-main bg-primary rounded-md" />
        <span className="font-webapp text-xs text-primary">مسابقات</span>
      </div>
    </footer>
  );
}
