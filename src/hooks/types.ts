export type GetFixturesList = {
    params: {
        date: string;
    }
};

export type Team = {
    id: number;
    logo: string;
    name: string;
}

export type FixtureResponse = {
    fixture: {
        id: number, timestamp: number;
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
    };
    teams: {
        away: Team;
        home: Team;
    }
};

export type GetFixturesListResponse = {
    errors: string[];
    get: "fixtures"
    response: FixtureResponse[];
    results: number;
}