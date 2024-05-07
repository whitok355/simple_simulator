
class CalcResult{
    constructor(){
        this.total_element = document.getElementById("total");
        this.right_element = document.getElementById("right");
        this.wrong_element = document.getElementById("wrong");
    }

    calcResult(flag){
        this.addTotal();
        if(flag){
            this.addRight();
        } else{
            this.addWrong();
        }
    }
    addTotal(){
        let html_value = this.total_element.innerHTML;
        this.total_element.innerHTML = ++html_value;
    }

    addRight(){
        let html_value = this.right_element.innerHTML;
        this.right_element.innerHTML = ++html_value;
    }

    addWrong(){
        let html_value = this.wrong_element.innerHTML;
        this.wrong_element.innerHTML = ++html_value;
    }

    resetAll(){
        this.total_element.innerHTML = 0;
        this.right_element.innerHTML = 0;
        this.wrong_element.innerHTML = 0;
    }

    getTotal(){
        return this.total_element.innerHTML;
    }
    getWrong(){
        return this.wrong_element.innerHTML;
    }
    getRight(){
        return this.right_element.innerHTML;
    }
}