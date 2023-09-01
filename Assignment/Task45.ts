//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manu_name : string;
    model : string;
    [key : string] : any;
}

function makeCar(manu_name: string, model : string, ...options: [string ,any][]): Car {
    const car: Car = {
        manu_name,
        model,
    };
    
    for (const [key, value] of options) {
    car[key] = value;
    }
    
    return car;
}

const myCar = makeCar("Toyota", "abc", ["color", "blue"]);

console.log(myCar);