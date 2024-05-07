class Division{
    

    generateExample(integer){
        const max = integer * 10;
        let values = [this.getRandomInt(integer, max), integer];
        return `${values[0]} / ${values[1]}`;
    }

    getRandomInt(min, max){
        let rand;
        do{
            rand = Math.floor(Math.random() * (max - min + 1)) + +(min);

        } while(rand % min);

        return rand;
    }
}