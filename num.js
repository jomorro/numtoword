const underTen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const underTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const overTwenty = ["", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[1] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[1] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[2] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[2] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[3] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[3] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[4] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[4] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[5] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[5] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[6] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[6] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[7] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[7] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[8] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[8] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
for (let i = 1; i < underTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[9] + " " + underTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < overTwenty.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[9] + " " + overTwenty[i] + " " + underTen[x] + " ");
        document.body.appendChild(div);
    }
}
let div1 = document.createElement("div");
div1.textContent = ("one thousand!")
document.body.appendChild(div1)