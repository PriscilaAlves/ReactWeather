// function getTempCallback (location, callback) {
//     callback(undefined, 78); //success case
//     callback('City not found'); //error case
// }
//
// getTempCallback('Philadelphia', function(error, temp) {
//     if (error) {
//         console.log('error', error);
//     } else {
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         resolve(79);
//         reject('City not found');
//     });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// })

// Challenge Area
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('inputs are not numbers.')
        }
    })
}

addPromise(4,5).then(function(sum) {
    console.log("sum is ", sum);
}, function(err) {
    console.log('error ', err);
})
