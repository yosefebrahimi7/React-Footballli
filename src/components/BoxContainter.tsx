import { Disclosure } from "@headlessui/react";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FixtureResponse } from "../hooks/types";
import moment from "moment";

export default function BoxContainter({
  fixtures,
}: {
  fixtures: FixtureResponse[];
}) {
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
                <div className="flex items-center gap-1">
                  <GlobeAsiaAustraliaIcon className="w-4 h-4" />
                  <span className="font-webapp text-secondary text-md font-semibold">
                    {fixtures[0].league.name} ({fixtures[0].league.country})
                  </span>{" "}
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform text-onyx" : ""
                  } h-3 w-3 text-onyx`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-onyx">
                {fixtures.map((fixture, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center gap-4 font-webapp border-b border-tertiary py-2"
                  >
                    <div
                      className="w-[35%] truncate"
                      title={fixture.teams.home.name}
                    >
                      <span>{fixture.teams.home.name}</span>
                    </div>
                    <span className="text-secondary">
                      {moment.unix(fixture.fixture.timestamp).format("hh:mm")}
                    </span>
                    <div
                      className="w-[35%] truncate"
                      title={fixture.teams.away.name}
                    >
                      <span>{fixture.teams.away.name}</span>
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
