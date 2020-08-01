import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './componnt/card';

// function App() {
//   return (
//     <div>
//       <Card title="1" body="this is 1"/>
//       <Card title="2" body="this is 2"/>
//       <Card title="3" body="this is 3"/>
//     </div>
  
//   );
// }

// export default App;

//---------------------class base state------------------
// class App extends React.Component {
//   state = {
//     articals:[
//       {id:1,title:'artical1',body:'this is artical1'},
//       {id:2,title:'artical2',body:'this is artical2'},
//       {id:3,title:'artical3',body:'this is artical3'}
//     ]
//   }

//   constructor(){
//     super()
//     setTimeout(() => {
//       this.setState({
//         articals:[
//           {id:4,title:'artical4',body:'this is artical4'},
//           {id:5,title:'artical5',body:'this is artical5'},
//           {id:6,title:'artical6',body:'this is artical6'}
//         ]
//       })
//     },2000)
//   }

//   render() { 
//     return (  
//       <div>
//         <Card title={this.state.articals[0].title} body={this.state.articals[0].body}/>
//         <Card title={this.state.articals[1].title} body={this.state.articals[1].body}/>
//         <Card title={this.state.articals[2].title} body={this.state.articals[2].body}/>
//       </div>
//     );
//   }
// }
 
// export default App;

//------------fanctional setstate---------------

// function App() {

//   const[state,setState]=useState({
//     articals:[
//       {id:1,title:'artical1',body:'this is artical1'},
//       {id:2,title:'artical2',body:'this is artical2'},
//       {id:3,title:'artical3',body:'this is artical3'}
//     ]
//   })

//   setTimeout(() => {
//           setState({
//             articals:[
//               {id:4,title:'artical4',body:'this is artical4'},
//               {id:5,title:'artical5',body:'this is artical5'},
//               {id:6,title:'artical6',body:'this is artical6'}
//             ]
//           })
//     },2000)


//   return (
//     <div>
//       {
//         state.articals.map(artical/*or (artical,index) */ => <Card key={artical.id}/*key={index} */ title={artical.title} body={artical.body} />)
//       }
//     </div>
  
//   );
// }

// export default App;


//--------------------------change state-----------------

// function App() {

//   const[state,setState]=useState({
//     articals:[
//       {id:1,title:'artical1',body:'this is artical1'},
//       {id:2,title:'artical2',body:'this is artical2'},
//       {id:3,title:'artical3',body:'this is artical3'}
//     ]
//   })




//   let articalList= state.articals.map(artical/*or (artical,index) */ => <Card key={artical.id}/*key={index} */ title={artical.title} body={artical.body} />)


//   let loadMore = (e)=>{

//     let articals=[
//       {id:4,title:'artical4',body:'this is artical4'},
//       {id:5,title:'artical5',body:'this is artical5'},
//       {id:6,title:'artical6',body:'this is artical6'}
//     ]
//     setState({
//       articals:[...state.articals,...articals]
//     })
    
//   }
  

//   return (
//     <div className="app">
//       {
//         articalList
//       }

      
//       <button onClick={loadMore}>
//         loadmore
//       </button>
//     </div>

  
//   );
// }

// export default App;

/*dar in halat state ijad shiode jaygozin mishavad dar hali ke dar class base merge mishe */


// ----------------------condition------------------

class App extends React.Component {
  state = {
    articals:[
      {id:1,title:'artical1',body:'this is artical1'},
      {id:2,title:'artical2',body:'this is artical2'},
      {id:3,title:'artical3',body:'this is artical3'},
    ],
    title:"this is title",
    loading:false
  }

  // constructor(){
  //   super()
  //   setTimeout(() => {
  //     this.setState({
  //       articals:[
  //         {id:4,title:'artical4',body:'this is artical4'},
  //         {id:5,title:'artical5',body:'this is artical5'},
  //         {id:6,title:'artical6',body:'this is artical6'}
  //       ]
  //     })
  //   },2000)
  // }

  loadMore = ()=>{

    this.setState({loading:true})

    setTimeout(() => {
      
    let articals=[
      {id:4,title:'artical4',body:'this is artical4'},
      {id:5,title:'artical5',body:'this is artical5'},
      {id:6,title:'artical6',body:'this is artical6'}
    ]
   
    this.setState(prevState=>{
      return{
        articals:[...prevState.articals,...articals],
        loading:false
      }
    });
      
    },3000)
    
  }

  render() { 
    let articalList= this.state.articals.map(artical/*or (artical,index) */ => <Card key={artical.id}/*key={index} */ title={artical.title} body={artical.body} />)

    return (
      <div className="app">
        {
          articalList
        }
        {
          this.state.loading?<div>Loading...</div>:null

        }

        <button onClick={this.loadMore}>
          loadmore
        </button>
      </div>

    
    );
  }
}
 
export default App;