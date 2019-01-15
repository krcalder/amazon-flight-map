/**
 * Filename: FlightMap.js
 * Author: Kurtis Calderon
 *         kurtiscal@gmail.com
 */

/**
 * Use this function to output a flight plan given a map of associated locations
 * - Assume order of map doesn't matter
 * - Assume map will have a valid final flight plan
 */
function getFlightPlan(map) {
    let origin;
    let tmp;
    let flightPlan = [];
    let revMap = {};
    let key;

    // Reverse the map to find origin
    for (key in map) {
        revMap[map[key]] = key;
    }

    // Find the origin w/ the reversed map
    tmp = Object.keys(revMap)[0]; // Start at the first key/value of the map
    while (revMap[tmp]) {
        tmp = revMap[tmp];
    }
    origin = tmp;

    // Now, we can compose the flight plan array
    tmp = origin;
    while (map[tmp]) {
        flightPlan.push(tmp);
        tmp = map[tmp];
    }
    flightPlan.push(tmp);

    return flightPlan;
}

/**
 * Test Cases
 */
(function() {
    let map = {
        LA: 'NY', // Origin = LA
        NY: 'Dallas',
        Dallas: 'Seattle', // Destination = Seattle
    };
    // Plan = LA -> NY -> Dallas -> Seattly

    let map2 = {
        LA: 'NY',
        NY: 'Dallas',
        SD: 'LA',
        Seattle: 'SD', // Origin = seattle
        Dallas: 'Pittsburg', // Destination = pittsburg
    };
    // Plan = Seattle -> SD -> LA -> NY -> Dallas -> Pittsburg

    let map3 = {
        A: 'B',
        F: 'G',
        D: 'E',
        C: 'D',
        B: 'C',
        E: 'F',
    };
    // Plan = A -> B -> C -> D -> E -> F

    let edge1 = {
        LA: 'NY',
    };
    // Plan = LA -> NY

    let plan = getFlightPlan(map);
    let plan2 = getFlightPlan(map2);
    let plan3 = getFlightPlan(edge1);
    console.log(plan);
    console.log(plan2);
    console.log(plan3);
    console.log(getFlightPlan(map3));
})();
