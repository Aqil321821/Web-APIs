// getting the current location of the user 

/*  navigator.geolocation.getCurrentPosition 
 
 it needs three parameters 

 1.success cb function which will executed when location is recieved
 2 .error cb if something went wrong it will be executed
 3. thrid parameter is an object with some options to get location



*/

function curSuccess(pos) {
    // console.log(pos);

    const coords = pos.coords;
    // console.log(coords , typeof(coords));

    console.log(`Latitude is ${coords.latitude} and Longitude is ${coords.longitude}`);

}
function curError(err) {
    console.log(`Error - ${err.code}- ${err.message}`);

}


const curOptions = {
    enableHighAccuracy: true, //use GPS
    timeout: 3000,   // after three seconds stop request
    maximumAge: 0, //do not get the cached location of user
};







navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

//we got an object  GeoLocationPosition with different properties
//inside that we got an object with long and lat values






//----------------------------------------------------------//

//watchPosition

//function watchSuccess fires off when the location of user changes
// we can have a target location when there we reach we got an alert

const target = {
    latitude: 40.251455,
    longitude: 71.52648,
};

function watchSuccess(pos) {
    // console.log(pos);

    const coords = pos.coords;
    // console.log(coords , typeof(coords));

    console.log(`Latitude is ${coords.latitude} and Longitude is ${coords.longitude}`);

    if (coords.latitude === target.latitude && coords.longitude === target.longitude) {
        alert('Reached on Destination');
           
         navigator.geolocation.clearWatch(id);
    }

}
function watchError(err) {
    console.log(`Error - ${err.code}- ${err.message}`);

}


const watchOptions = {
    enableHighAccuracy: true, //use GPS
    timeout: 3000,   // after three seconds stop request
    maximumAge: 0, //do not get the cached location of user
};


const id=navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);


//watch position returns an id from which we can clear it


