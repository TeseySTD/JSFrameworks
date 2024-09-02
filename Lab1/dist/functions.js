function printStringNTimes(str, n) {
    if (n === void 0) { n = 1; }
    for (var i = 0; i < n; i++) {
        console.log(str);
    }
    return n;
}
printStringNTimes("A");
printStringNTimes("B", 3);
