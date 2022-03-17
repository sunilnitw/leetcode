/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let newTrips = [];
    for(let i=0; i<trips.length; i++){
        newTrips.push([trips[i][1], trips[i][0]]);
        newTrips.push([trips[i][2], -trips[i][0]]);
    }
    newTrips.sort((a,b)=>{
        if(a[0]-b[0]  === 0) return a[1]-b[1];
        return a[0]-b[0];
    });
    let sum = 0;
    // console.log(newTrips)
    for(let i=0; i<newTrips.length; i++){
        sum += newTrips[i][1];
        // console.log(sum)
        if(sum>capacity) return false;
    }
    return true;
};