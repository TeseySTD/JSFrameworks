function printStringNTimes(str: string, n: number = 1): number {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
    return n;
}

printStringNTimes("A");
printStringNTimes("B", 3);  

