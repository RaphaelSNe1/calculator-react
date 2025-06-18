import React from 'react';
import ReactDOM from 'react-dom/client';

function myApp(){
    class Car{
        constructor(name){
            this.brand = name;
        }

        present(){
            return 'I have a ' + this.brand;
        }
    }

    const car = new Car("Dacia");
    car.present();
}

export default myApp();