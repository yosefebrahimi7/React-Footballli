import moment from 'moment';

const renderNewDays = (lastDate: string) => {
    let days: string[] = [];
    for (let index = 1; index <= 7; index++) {
        days = [...days, moment(lastDate).add(index, "days").format("YYYY-MM-DD")];
    }
    return days;
}

export { renderNewDays };
