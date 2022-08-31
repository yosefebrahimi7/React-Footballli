import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import moment from 'moment'
import { renderNewDays } from "./appStateFunctions";

export interface AppState {
    initDays: {
        value: string;
        title: string;
    }[];
    days: string[];
    addDays: () => void;
    selectedDay: string;
    setSelectedDay: (date: string) => void;
}

const useAppState = create<AppState>()(
    devtools(
        (set) => ({
            initDays: [
                {
                    title: 'دیروز',
                    value: moment().add(-1, 'days').format("YYYY-MM-DD"),
                },
                {
                    title: 'امروز',
                    value: moment().format("YYYY-MM-DD"),
                },
                {
                    title: 'فردا',
                    value: moment().add(1, 'days').format("YYYY-MM-DD"),
                },
            ],
            days: renderNewDays(moment().add(1, 'days').format("YYYY-MM-DD")),
            addDays: () => set((old) => {
                let all = [...old.initDays.map(item => item.value), ...old.days];
                return ({ days: [...old.days, ...renderNewDays(all[all.length - 1])] });
            }),
            selectedDay: moment().add(1, 'days').format("YYYY-MM-DD"),
            setSelectedDay: (date: string) => set(() => ({ selectedDay: date })),
        }),
    )
);

export default useAppState;