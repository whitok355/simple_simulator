class Multiplication {

    generateExample(integer){
        let values = [this.getRandomInt(1, 9), integer];
        if(this.getRandomInt(0, 1) == 1){
            return `${values[0]} * ${values[1]}`;
        } else{
            return `${values[1]} * ${values[0]}`;
        }
    }
    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + +min;
    }
    
}