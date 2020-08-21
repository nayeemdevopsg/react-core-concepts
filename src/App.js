import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const mobile = ["iphone", "samsung", "xiaomi", "HTC", "symphony"]
const products = [
  {name:'Photoshop', price:'100$'},
  {name:'AI', price:'200$'},
  {name:'XD', price:'400$'}
]

  return (
    <div className="App">
      <header className="App-header">
       <h1> React Person List:</h1>
       <Counter></Counter>
       <User></User>
       <ul>
         {
           mobile.map(Mnames => <li>{Mnames}</li>)
         }
         {
           products.map(pro => <li>{pro.name} {pro.price}</li>)
         }
       </ul>
        { products.map( prs => <Product product={prs}></Product>)}
        
      </header>
    </div>
  );
}


function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
   <h1>Counter: {count}</h1>
   <button onClick={ () => setCount(count + 1) }>Increase</button>
   <button onClick={ () => setCount(count - 1) }>Decrease</button>

  </div>
  )
  
}


function Product(props){
  const productStyle={
       border: '1px solid gray',
       borderRadius: '5px',
       backgroundColor: 'gray',
       height: '200px',
       width: '200px',
       float: 'left',
       marginBottom: '2px' 
  }

 const {name , price} = props.product;

  return (
    <div style={productStyle}>
     <h3>{name}</h3>
     <h5>{price}</h5>
     <button>Submit</button>
    </div>
  )
}
function Person(props) {
  return (<div style={{border:'1px solid red', margin:'10px', padding: '4px'}}>
    <h1>Name: {props.name}</h1>
    <h3>Kaj: {props.status}</h3>
  </div>)
}


function User(props){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h1>{users.length}</h1>
      <ul>
  { users.map(user => <li>{user.name}</li> )}
      </ul>
    </div>
  )
}


export default App;
