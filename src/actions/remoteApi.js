const remoteUrl = "http://localhost:3000";

export const dummyPlayerId = "hardeja01";

export async function fetchAllPlayers() {
    const url = `${remoteUrl}/api/v1/players`;
    const response = await fetch(url);
    const data = await response.json();
    const items = data.data;
    return items;
};


export async function fetchPlayerInfo(playerid) {
    const url = `${remoteUrl}/api/v1/players/${playerid}`;
    const response = await fetch(url);
    const data = await response.json();
    const items = data.data;
    return items;
};


export async function fetchPlayerStats(playerid) {
    const url = `${remoteUrl}/api/v1/stats/${playerid}`;
    const response = await fetch(url);
    const data = await response.json();
    const items = data.data;
    return items;
};


export async function fetchPlayerGamelog(playerid) {
    const url = `${remoteUrl}/api/v1/gamelogs/${playerid}`;
    const response = await fetch(url);
    const data = await response.json();
    const items = data.data;
    return items;
};