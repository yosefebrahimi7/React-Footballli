import { GetFixturesList, GetFixturesListResponse } from './types';
import { useQuery, UseQueryOptions } from "react-query";
import appHttp from "../api/appHttp";


const fixturesList = async ({ params }: GetFixturesList) => {
    let http = await appHttp();
    let url = `/fixtures?date=${params.date}`;
    const { data } = await http.get<GetFixturesListResponse>(url);
    return data;
};

export function useFixtures(
    query: GetFixturesList,
    options?: UseQueryOptions<
        unknown,
        Error,
        GetFixturesListResponse,
        [string, GetFixturesList]
    >
) {
    return useQuery(
        [`fixtures`, query],
        () => fixturesList({ params: query.params }),
        { ...options }
    );
}