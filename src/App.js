import React, { useState } from 'react';
import './App.css';
import Card from './componnt/card';
import {Carousel} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.css';

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

// class App extends React.Component {
//   state = {
//     articals:[
//       {id:1,title:'artical1',body:'this is artical1'},
//       {id:2,title:'artical2',body:'this is artical2'},
//       {id:3,title:'artical3',body:'this is artical3'},
//     ],
//     title:"this is title",
//     loading:false
//   }

//   // constructor(){
//   //   super()
//   //   setTimeout(() => {
//   //     this.setState({
//   //       articals:[
//   //         {id:4,title:'artical4',body:'this is artical4'},
//   //         {id:5,title:'artical5',body:'this is artical5'},
//   //         {id:6,title:'artical6',body:'this is artical6'}
//   //       ]
//   //     })
//   //   },2000)
//   // }

//   loadMore = ()=>{

//     this.setState({loading:true})

//     setTimeout(() => {
      
//     let articals=[
//       {id:4,title:'artical4',body:'this is artical4'},
//       {id:5,title:'artical5',body:'this is artical5'},
//       {id:6,title:'artical6',body:'this is artical6'}
//     ]
   
//     this.setState(prevState=>{
//       return{
//         articals:[...prevState.articals,...articals],
//         loading:false
//       }
//     });
      
//     },3000)
    
//   }

//   render() { 
//     let articalList= this.state.articals.map(artical/*or (artical,index) */ => <Card key={artical.id}/*key={index} */ title={artical.title} body={artical.body} />)

//     return (
//       <div className="app">
//         {
//           articalList
//         }
//         {
//           this.state.loading?<div>Loading...</div>:null

//         }

//         <button onClick={this.loadMore}>
//           loadmore
//         </button>
//       </div>

    
//     );
//   }
// }
 
// export default App;

//----------------react bootstrap------


// class App extends React.Component {
//   state = {
//     articals:[
//       {id:1,title:'artical1',body:'this is artical1'},
//       {id:2,title:'artical2',body:'this is artical2'},
//       {id:3,title:'artical3',body:'this is artical3'},
//     ],
//     title:"this is title",
//     loading:false
//   }

//   // constructor(){
//   //   super()
//   //   setTimeout(() => {
//   //     this.setState({
//   //       articals:[
//   //         {id:4,title:'artical4',body:'this is artical4'},
//   //         {id:5,title:'artical5',body:'this is artical5'},
//   //         {id:6,title:'artical6',body:'this is artical6'}
//   //       ]
//   //     })
//   //   },2000)
//   // }

//   loadMore = ()=>{

//     this.setState({loading:true})

//     setTimeout(() => {
      
//     let articals=[
//       {id:4,title:'artical4',body:'this is artical4'},
//       {id:5,title:'artical5',body:'this is artical5'},
//       {id:6,title:'artical6',body:'this is artical6'}
//     ]
   
//     this.setState(prevState=>{
//       return{
//         articals:[...prevState.articals,...articals],
//         loading:false
//       }
//     });
      
//     },3000)
    
//   }

//   render() { 
//     let articalList= this.state.articals.map(artical/*or (artical,index) */ => <Card key={artical.id}/*key={index} */ title={artical.title} body={artical.body} />)

//     return (

      



//       <div className="app">
//         <Carousel>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://roocket.ir/public/images/2020/4/28/node.png"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://roocket.ir/public/images/2020/5/1/next.png"
//               alt="Third slide"
//             />

//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://roocket.ir/public/images/2020/6/17/angular.png"
//               alt="Third slide"
//             />

//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//         {
//           articalList
//         }
//         {
//           this.state.loading?<div>Loading...</div>:null

//         }

//         <button onClick={this.loadMore} className="btn-more">
//           loadmore
//         </button>
//       </div>

    
//     );
//   }
// }
 
// export default App;

//-------------------life cycle (mounting)------------


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


  constructor(props){
    super(props);
    console.log('[app.js] run constructor')
  }

  static getDerivedStateFromProps(props,state){
    console.log('[app.js] run getDerivedStateFromProps')
  }

  componentDidMount(){
    console.log('[app.js] run componentDidMount')
  }



  render() { 
    let articalList= this.state.articals.map(artical/*or (artical,index) */ => <Card key={artical.id}/*key={index} */ title={artical.title} body={artical.body} />)
    console.log('render')
    return (

    
      <div className="app">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://roocket.ir/public/images/2020/4/28/node.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://roocket.ir/public/images/2020/5/1/next.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://roocket.ir/public/images/2020/6/17/angular.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {
          articalList
        }
        {
          this.state.loading?<div>Loading...</div>:null

        }

        <button onClick={this.loadMore} className="btn-more">
          loadmore
        </button>
      </div>

    
    );
  }
}
 
export default App;




