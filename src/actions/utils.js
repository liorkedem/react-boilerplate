export function convertTeamNameToFull(shortName) {
    let ans = "FREE AGENT";
		
    if(shortName.toUpperCase().includes("ATL"))
        ans = "ATLANTA HAWKS";
    else if(shortName.toUpperCase().includes("BOS"))
        ans = "BOSTON CELTICS";
    else if(shortName.toUpperCase().includes("BKN") || shortName.toUpperCase().includes("BRK"))
        ans = "BROOKLYN NETS";
    else if(shortName.toUpperCase().includes("CHA")  || shortName.toUpperCase().includes("CHO"))
        ans = "CHARLOTTE HORNETS";
    else if(shortName.toUpperCase().includes("CHI"))
        ans = "CHICAGO BULLS";
    else if(shortName.toUpperCase().includes("CLE"))
        ans = "CLEVELAND CAVALIERS";
    else if(shortName.toUpperCase().includes("DAL"))
        ans = "DALLAS MAVERICKS";
    else if(shortName.toUpperCase().includes("DEN"))
        ans = "DENVER NUGGETS";
    else if(shortName.toUpperCase().includes("DET"))
        ans = "DETROIT PISTONS";
    else if(shortName.toUpperCase().includes("GS"))
        ans = "GOLDEN STATE WARRIORS";
    else if(shortName.toUpperCase().includes("HOU"))
        ans = "HOUSTON ROCKETS";
    else if(shortName.toUpperCase().includes("IND"))
        ans = "INDIANA PACERS";
    else if(shortName.toUpperCase().includes("LAC"))
        ans = "LOS ANGELES CLIPPERS";
    else if(shortName.toUpperCase().includes("LAL"))
        ans = "LOS ANGELES LAKERS";
    else if(shortName.toUpperCase().includes("MEM"))
        ans = "MEMPHIS GRIZZLIES";
    else if(shortName.toUpperCase().includes("MIA"))
        ans = "MIAMI HEAT";
    else if(shortName.toUpperCase().includes("MIL"))
        ans = "MILWAUKEE BUCKS";
    else if(shortName.toUpperCase().includes("MIN"))
        ans = "MINNESOTA TIMBERWOLVES";
    else if(shortName.toUpperCase().includes("NO"))
        ans = "NEW ORLEANS PELICANS";
    else if(shortName.toUpperCase().includes("NY"))
        ans = "NEW YORK KNICKS";
    else if(shortName.toUpperCase().includes("OKC"))
        ans = "OKLAHOMA CITY THUNDER";
    else if(shortName.toUpperCase().includes("ORL"))
        ans = "ORLANDO MAGIC";
    else if(shortName.toUpperCase().includes("PHI"))
        ans = "PHILADELPHIA 76ERS";
    else if(shortName.toUpperCase().includes("PHO")  || shortName.toUpperCase().includes("PHX"))
        ans = "PHOENIX SUNS";
    else if(shortName.toUpperCase().includes("POR"))
        ans = "PORTLAND TRAIL BLAZERS";
    else if(shortName.toUpperCase().includes("SAC"))
        ans = "SACRAMENTO KINGS";
    else if(shortName.toUpperCase().includes("SA"))
        ans = "SAN ANTONIO SPURS";
    else if(shortName.toUpperCase().includes("TOR"))
        ans = "TORONTO RAPTORS";
    else if(shortName.toUpperCase().includes("UTA"))
        ans = "UTAH JAZZ";
    else if(shortName.toUpperCase().includes("WAS"))
        ans = "WASHINGTON WIZARDS";
    return ans;
};