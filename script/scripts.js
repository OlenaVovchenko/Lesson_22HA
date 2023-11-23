//Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const elBut = document.createElement ("button")
// elBut.innerText = "Click me"
// document.body.appendChild(elBut)

// const elDiv = document.createElement("div")
// elDiv.style.width = "200px"
// elDiv.style.height = "200px"
// elDiv.style.backgroundColor = "red"
// document.body.appendChild(elDiv)

// elBut.addEventListener("click", function(){
//     elDiv.style.backgroundColor = "green"
//     elDiv.style.width = "100px"
//     elDiv.style.height = "100px"
// })
// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
// const elBut = document.createElement ("button")
// elBut.innerText = "Click me"
// document.body.appendChild(elBut)

// const elDiv = document.createElement("div")
// elDiv.style.width = "200px"
// elDiv.style.height = "200px"
// elDiv.style.backgroundColor = "rgb(255, 0, 191)"
// document.body.appendChild(elDiv)

// elBut.addEventListener("click", function(){
//     elDiv.style.backgroundColor = "blue"
//     console.log("blue");
   
// })
// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
// const elBut = document.createElement ("button")
// elBut.innerText = "Click me"
// document.body.appendChild(elBut)

// const elDiv = document.createElement("div")
// elDiv.style.width = "150px"
// elDiv.style.height = "150px"
// elDiv.style.backgroundColor = "red"
// document.body.appendChild(elDiv)

// elBut.addEventListener("click", function(){
//     elDiv.style.width = "170px"
//     elDiv.style.height = "170px"
// })
// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
// const elBut = document.createElement ("button")
// elBut.innerText = "Click me"
// document.body.appendChild(elBut)

// const elDiv = document.createElement("div")
// elDiv.classList.add("root")
// elDiv.style.width = "200px"
// elDiv.style.height = "200px"
// elDiv.style.backgroundColor = "red"
// document.body.appendChild(elDiv)

// elBut.addEventListener("click", function(){
//     const elPar = document.createElement("p")
//     elPar.innerText = "Hello! Heute machen wir die Hausufgabe"
//     elPar.style.color = "blue"
//   elDiv.appendChild(elPar)
// })

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const elBut = document.createElement ("button")
elBut.innerText = "Click me"
document.body.appendChild(elBut)

const elDiv = document.createElement("div")
elDiv.classList.add("root")
elDiv.style.width = "200px"
elDiv.style.height = "200px"
elDiv.style.backgroundColor = "red"
document.body.appendChild(elDiv)

let isBlue = true

elBut.addEventListener("click", function(){
    const elPar = document.createElement("p")
    elPar.innerText = "Hello! Heute machen wir die Hausufgabe"
        if (isBlue) {
            elPar.style.color = "blue"            
        }
        else {elPar.style.color = "green"}
    
  elDiv.appendChild(elPar)
  isBlue = !isBlue

})