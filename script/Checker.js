class Checker{
    
    checkAnswer(example){
        const answerValue = document.getElementById("answer").value;
        const exampleValue = example.split(" ");
        let rightAnswer;
        
        switch(exampleValue[1]){
            case "*":
                rightAnswer = exampleValue[0] * exampleValue[2];
                break;
            case "/":
                rightAnswer = exampleValue[0] / exampleValue[2];
                break;
            case "+":
                rightAnswer = +exampleValue[0] + +exampleValue[2];
                break;
            case "-":
                rightAnswer = +exampleValue[0] - +exampleValue[2];
                break;

        }
        if(answerValue == rightAnswer){
            return true
        } else{
            return false;
        }
    }
}