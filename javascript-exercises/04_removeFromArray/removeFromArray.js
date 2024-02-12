const removeFromArray = function(arr, ...args) {
    let res = [];
    arr.forEach((item) => {
    if (!args.includes(item)) {
      res.push(item);
    }});
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
