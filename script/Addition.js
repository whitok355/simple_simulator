class Addition{

    generateExample(integer){
        let values = [this.getRandomInt(integer, 100), integer];
        return `${values[0]} + ${values[1]}`;
    }

    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + +min;;
    }
}