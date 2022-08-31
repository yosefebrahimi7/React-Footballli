import { useMemo } from "react";
import { FixtureResponse } from "../hooks/types";
import { useFixtures } from "../hooks/useFixtures";
import useAppState from "../store/useAppState";
import { groupBy } from "../utils/groupBy";
import BoxContainter from "./BoxContainter";
import BoxContainterLoading from "./BoxContainterLoading";

export default function CurrentDayList() {
  const appState = useAppState();
  const { data, isLoading } = useFixtures({
    params: {
      date: appState.selectedDay,
    },
  });

  const list = useMemo(() => {
    if (!data) return {};
    const groupByLeague = groupBy(
      data.response,
      (item: any) => item?.league.id
    );
    return groupByLeague;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <main className="p-4 w-full space-y-3 h-full ?">
      {isLoading && (
        <>
          <BoxContainterLoading />
          <BoxContainterLoading />
          <BoxContainterLoading />
        </>
      )}

      {Object.keys(list).map((objKey, index) => (
        <BoxContainter
          key={index}
          fixtures={list[objKey] as unknown as FixtureResponse[]}
        />
      ))}
    </main>
  );
}
