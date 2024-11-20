

let title = document.querySelector(".word-title");
let meaning = document.querySelector(".meaning");
let exa = document.querySelector(".example");
let btn = document.querySelector("button");
let AudioTag = document.getElementById("audioTag");
let box2 = document.querySelector(".box2");
let child = document.querySelector(".child");
btn.addEventListener("click", () => {
    let word = document.querySelector("input").value;
    if (!word) {
        alert("Please enter a word!");
        
        return;
    }
    

    let api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    let fullApi = api + word;

    fetch(fullApi)
        .then((response) => {
            if (response.ok === true) {
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            let name = data[0].word;
            
            let audio = data[0].phonetics[1]?.audio;


            let dec = data[0].meanings[0].definitions[0].definition || "No Data found";
            let example = data[0].meanings[1].definitions[0].definition || "No Example Available";
            title.textContent = name;
            meaning.textContent = dec;
            exa.textContent = example;
            if (audio) {
                AudioTag.src = audio;
            AudioTag.style.visibility = "visible"
            }        
        })
        .catch((error) => {
            alert("Some error , Enter a new word")
           
        })

})



