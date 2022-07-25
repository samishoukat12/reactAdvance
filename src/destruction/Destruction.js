import React, { useEffect } from 'react'

export default function Destruction() {
    //destructuring the props
    const array = ["corola", "white", "1990"]

    const [model, color, year] = array
    console.log(model)

    //destructuring the props with default values
    const [model2, color2, year2] = ["corola", "white", 1990]
    console.log(model2)

    const [model3, , year1] = array
    console.log(year1)




    const algebric = (a, b) => {
        const add = a + b
        const sub = a - b
        const div = a / b
        const mul = a * b

        return [add, sub, div, mul]
    }
    const [add, sub, mul, div] = algebric(10, 5)
    console.log(add)


    
    //destruction in obj
    const obj = {
        name: "corola",
        color: "white",
        year: 1990
    }

    const function1 = ({ name, color, year }) => {
        console.log("name is" + " " + name + " " + "color is" + " " + color + " " + "year is" + " " + year)
    }
    useEffect(() => {
        function1(obj)
    })
    return (
        <div>Destruction</div>
    )
}
