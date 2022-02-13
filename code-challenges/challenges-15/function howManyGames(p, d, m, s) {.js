function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let totalCost = 0;
    let count = 0;
    while (totalCost < s) {
        if (count == 0) {
            totalCost += p;
        } else if (count <= m) {
            totalCost += p - d;
        }
        else totalCost += m;

        count++;
    }
    return count;
}