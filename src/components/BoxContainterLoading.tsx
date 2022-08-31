import { Disclosure } from "@headlessui/react";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function BoxContainterLoading({}: {}) {
  return (
    <div className="w-full bg-main flex-1 rounded-lg h-full">
      <div className="mx-auto w-full max-w-md rounded-lg bg-main overflow-hidden">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx(
                  "flex  items-center w-full justify-between bg-main px-4 py-3 text-left text-sm font-medium focus:outline-none focus-visible:ring-0",
                  {
                    "rounded-t-lg": !open,
                    "border-b-2 border-tertiary": open,
                  }
                )}
              >
                <div className="flex items-center gap-1 animate-pulse">
                  <GlobeAsiaAustraliaIcon className="w-4 h-4" />
                  <div className="font-webapp text-secondary text-md font-semibold inline-block w-32 h-4 bg-tertiary"></div>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform text-onyx" : ""
                  } h-3 w-3 text-onyx`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-onyx">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center gap-4 font-webapp border-b border-tertiary py-2 animate-pulse"
                  >
                    <div className="w-[35%] h-4 truncate bg-tertiary">
                      <span></span>
                    </div>
                    <span className="text-secondary">00:00</span>
                    <div className="w-[35%] h-4 truncate bg-tertiary">
                      <span></span>
                    </div>
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
