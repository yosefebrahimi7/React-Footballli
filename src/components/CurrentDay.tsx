import clsx from "clsx";
import { UIEvent, useEffect, useRef } from "react";
import SimpleBarReact from "simplebar-react";
import useHorizontalScrollEvent from "../hooks/useHorizontalScrollEvent";
import useAppState from "../store/useAppState";
import { formatDate } from "../utils/formatDate";

export default function CurrentDay() {
  const appState = useAppState();
  const scrollableNodeRef = useRef();

  const handleScroll = useHorizontalScrollEvent((type: "start" | "end") => {
    if (type === "end") {
      appState.addDays();
    }
  });

  useEffect(() => {
    if (scrollableNodeRef.current)
      (scrollableNodeRef.current as HTMLElement).addEventListener(
        "scroll",
        (evt) => {
          handleScroll(evt as unknown as UIEvent<HTMLElement>);
        }
      );
    return () => {
      if (scrollableNodeRef.current)
        (scrollableNodeRef.current as HTMLElement).removeEventListener(
          "scroll",
          (evt) => {
            handleScroll(evt as unknown as UIEvent<HTMLElement>);
          }
        );
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <SimpleBarReact
        data-simplebar-direction="rtl"
        className="w-full"
        onScroll={handleScroll}
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        <ul className="flex h-full">
          {appState.initDays.map((day, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  "py-2 px-5 min-w-fit inline-block font-webapp text-smoky-black relative text-center overflow-hidden",
                  {
                    "!text-onyx font-bold": appState.selectedDay === day.value,
                  }
                )}
                onClick={() => appState.setSelectedDay(day.value)}
              >
                <span className="cursor-pointer">{day.title}</span>
                {appState.selectedDay === day.value && (
                  <div className="w-8 h-2 bg-primary -bottom-1 absolute rounded-md left-0 right-0 mx-auto"></div>
                )}
              </li>
            );
          })}
          {appState.days.map((date, index) => (
            <li
              key={index}
              className={clsx(
                "py-2 px-5 min-w-fit inline-block font-webapp text-smoky-black relative text-center overflow-hidden",
                {
                  "!text-onyx font-bold": appState.selectedDay === date,
                }
              )}
              onClick={() => appState.setSelectedDay(date)}
            >
              <span className="cursor-pointer">
                {index === 0
                  ? formatDate(date, "dddd")
                  : formatDate(date, "D MMMM")}
              </span>

              {appState.selectedDay === date && (
                <div className="w-8 h-2 bg-primary -bottom-1 absolute rounded-md left-0 right-0 mx-auto"></div>
              )}
            </li>
          ))}
        </ul>
      </SimpleBarReact>
    </div>
  );
}
