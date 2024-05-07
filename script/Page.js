class Page{

    getStartPage(){
        document.getElementById("form_route").classList.remove("invis");
        document.getElementById("form_game").classList.add("invis");
        document.getElementById("check").classList.add("invis");
        document.querySelector(".btn").classList.add("invis");
        document.getElementById("emotion").classList.add("invis");
        document.querySelector(".bd__element").classList.add("invis");
    }
    getGamePage(route, int){
        document.getElementById("form_route").classList.add("invis");
        document.getElementById("form_game").classList.remove("invis");
        document.getElementById("check").classList.remove("invis");
        document.querySelector(".btn").classList.remove("invis")
        document.getElementById("check").classList.remove("invis");
        document.querySelector(".bd__element").classList.remove("invis");
        document.getElementById("emotion").classList.remove("invis");
        document.getElementById("hd_title").innerHTML = ` ${route} на ${int}`;
    }
    renderRightMsg(){
        const checkEl = document.getElementById("check"); 
        checkEl.classList.remove("invis");
        checkEl.innerHTML= "Верно";
        if(checkEl.classList.contains("center__check--false")){
            checkEl.classList.remove("center__check--false");
        }
        if(!checkEl.classList.contains("center__check--right")){
            checkEl.classList.add("center__check--right");
        }

    }
    renderWrongMsg(){
        const checkEl = document.getElementById("check");
        checkEl.classList.remove("invis");
        if(checkEl.classList.contains("center__check--right")){
            checkEl.classList.remove("center__check--right");
        }
        if(!checkEl.classList.contains("center__check--false")){
            checkEl.classList.add("center__check--false");
        }
        checkEl.innerHTML= "Не верно";

    }
    invisMsg(){
        const checkEl = document.getElementById("check");
        if(checkEl){
            checkEl.classList.add("invis");
        }
    }
    renderExample(renderRow){
        document.getElementById("example").innerHTML = renderRow;
    }
    clearInput(){
        document.getElementById("answer").value="";
        document.getElementById("divider").value="";
        document.getElementById("multiplier").value="";
        document.getElementById("summand").value="";
        document.getElementById("deductible").value="";
    }

    changeEmotion(newUrl){
        document.getElementById("emotion").setAttribute("src", newUrl);
    }
    renderErr(msg){
        const errEl = document.getElementById("err");

        if(errEl != null){
            this.removeEl("err");
        }          

        const el = document.createElement("h3");
        el.classList.add("err");
        el.setAttribute("id", "err");
        el.innerHTML =msg;
        document.querySelector(".ft").appendChild(el);
    }

    removeEl(removeEl){
        const errEl = document.getElementById(removeEl);
        if(errEl != null){
            document.getElementById(removeEl).remove();
        }
    }
}