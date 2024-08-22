function lemonadeChange(bills: number[]): boolean {
    let five = 0, ten = 0;
    
    for (let b of bills) {
        if (b === 5) five++;
        if (b === 10) ten++;
        
        const change = b - 5;
        if (change === 5) {
          if (five > 0) five--
          else return false;
        } else if (change === 15) {
            if (five > 0 && ten > 0) {
                five --
                ten--         
            } else if (five > 0 && five >= 3) {
                five = five - 3
            } else {
                return false
            }
        }
    }
    
    return true
};