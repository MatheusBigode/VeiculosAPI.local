    let url = "./cars.json"

    let plate = document.getElementById("plate")

    let brand = document.getElementById("brand")
    let model = document.getElementById("model")
    let year = document.getElementById("year")
    let color = document.getElementById("color")
    let img = document.getElementById("img")

function busca() {
    fetch(url)
         .then(res => res.json())
         .then(data => {
            for(var car of data.cars){
                if(plate.value == car.plate){
                    brand.value = car.brand
                    model.value = car.model
                    year.value = car.year
                    color.value = car.color

                    console.log(
                        car
                    )
                    break
                }
            }
         })
}

function limpa() {
    plate.value = ("")
    brand.value = ("")
    model.value = ("")
    year.value = ("")
    color.value = ("")
}