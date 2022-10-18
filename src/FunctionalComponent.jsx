import React, { useState } from "react";
//usestate helps us with data required for a component
//props is the data we want to pass to another component , just like inheritance in classes, in functions its props, like parameters we pass to the functions
//props are made in app.js , but here they are used as parameters


//react ke sath we dont have to use nodemon, to refresh the server everytime, because we dont have to refresh the page while using react to make any changes , react can make changes wihtout reloading the page with its refresh feature , hence making it a very powerful tool to use 
//actually whenever the state changes the component refreshes


const FunctionalComponent = (props) => { //props is a js object and usme wo data aya h jo app.js me functionalcomponent k tag me humne likha h
    //return se pehle pehle useState ka kaam hoga 
    const [count, setCount] = useState(0); //[] are used for destructuring
    // count is the variable whose default value is 0 and setCount is the function to count the numbers
    // {/*  react me HTML ke andr kuch bhi javaScript likh skte h with the help of {} */} *
    //we will add a event handler in button i.e onclick , upon which the function setCount will be called
    // in the onclick set count function count ++ wont work because count is a const we cant update it, but count+1 will work because react can update it internally
    //if we dont use arrow function () => then due to javascript the {setcount()} will get called automatically and again and again , hence the infinite loop of refreshes giving a blank screen , that is why we use the arrow function () => , then the function will be loaded, the page will be loaded but it will not run until we press the button  
    // function func() runs automatically  , but the arrow function runs only when it is called, and here it gets called onClick
    //we can also do it by creating a variable arrow function like this , and put it in that place, thi is supposed to be done only when we have a lot of logic 

    //e is event , js me data , inputs etc track krna is v easy , like that in console log 

    //agar hume apni mrzi ka input wala nam dalna h to we will need useState, because changes in the state needs to be tracked constantly like...
    const [changeName, setChangeName] = useState(""); //jese hi input field me kuch bhi type hoga to us event ka target ki value setChangeName , changeName me store krta rhega, fir setName use badal dega on screen, power of frontend , and react

    const subtractConst = () => {
        setCount(count - 1)
    }

    //we can also spread out our props here, fir sb jgh props.this ye wo nhi likhna pdega
    const { naem, age, company, setName } = props; //iska bhi shorter way h to directly write it in the parameter of the function


    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to Add 1</button>
            <button onClick={subtractConst}>Click me to Subtract 1</button>
            <h1>{count}</h1>
            <h1>My name is {props.name} I am {props.age}, I work for {props.company}</h1>

            <input onChange={(e) => setChangeName(e.target.value)} />

            <button onClick={() => props.setName(changeName)}>Change name </button>
        </div>
    )
}

export default FunctionalComponent;