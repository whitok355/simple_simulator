class Emotion{

    constructor(){
        this.urlImg = "";
    }

    checkEmotion(rightValue, wrongValue){
        const valueResult = +rightValue - +wrongValue;

        if(rightValue == 0 && wrongValue == 0){
            console.log(1)
            this.setUrlImg("./pictures/norm.png");
        } else if(valueResult > 0 && valueResult < 5){
            console.log(2)
            this.setUrlImg("./pictures/norm.png");
        } else if(valueResult >= 5 && valueResult <= 10){
            console.log(3)
            this.setUrlImg("./pictures/smile.jpg");
        } else if(valueResult > 10){
            console.log(4)
            this.setUrlImg("./pictures/professor.jpg");
        } else if(valueResult < 0){
            console.log(5)
            this.setUrlImg("./pictures/furious.jpg");
        }

        return this.getUrl();
    }

    getUrl(){
        return this.urlImg;
    }

    setUrlImg(newUrl){
        this.urlImg = newUrl;
    }
}