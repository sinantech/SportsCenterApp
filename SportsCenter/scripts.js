let btn = document.querySelector(".button-container");
let features = document.querySelector("#features-container");

btn.addEventListener("click",(e) => {

    features.classList.remove("features-container");
    void features.offsetWidth;
    features.classList.add("features-container");

    switch(e.target.id) {

        case "yoga":
            yoga();
            break;

        case "group":
            group();
            break;
        
        case "solo":
            solo();
            break;
           
        case "stretch":
            strech();
            break;

        default:
            return;        
    }
})

