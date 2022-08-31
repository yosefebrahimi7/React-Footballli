import { UIEvent, useRef } from "react";

const useHorizontalScrollEvent = (
  callback: (type: "start" | "end") => void
) => {
  const positionRef = useRef(0);
  return (event: UIEvent<HTMLElement>) => {
    const x = event.currentTarget.scrollLeft;

    // for rtl use +
    // for ltr use -
    let offset =
      event.currentTarget.scrollWidth + event.currentTarget.scrollLeft;
    let width = event.currentTarget.clientWidth;

    if (Math.abs(offset - width) < 5) {
      return callback("end");
    }

    if (Math.abs(x - 0) < 5) {
      return callback("start");
    }
  };
};

export default useHorizontalScrollEvent;
