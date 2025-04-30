/* function VM(drink, coin){
    const menu = {
        콜라 : 1000,
        사이다 : 1000,
        환타 : 1500,
        솔의눈 : 1500
    }

    const price = menu[drink];
    const charge = coin - price;
    if(!price){
        return console.log("존재하지 않는 메뉴입니다.", coin)
    }

    if(price > coin){
        return console.log('요금이 부족합니다.', coin)
    }

    if(price < coin){
        return console.log(drink, charge)
    }

    console.log(drink);
}

VM('콜라', 1000) */
