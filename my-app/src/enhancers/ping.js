export const ping = store => next => action => {
    console.log('ping');
    return next(action)
};
// var ping = function ping(store) {
//     return function (next) {
//         return function (action) {
//             console.log('ping');
//             return next(action);
//         };
//     };
// };
