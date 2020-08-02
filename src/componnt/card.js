import React, { Component } from 'react';
import './card.css';
//----------------fanctional------------
// function Card(props){ //mitavanim besorate (title , body ) daryaft shavad va faght nam title va body bejay props.title ya props.body estefade shavad
//     return(
//         <div className="card">
//             <header className="card-header">
//                 <h2>{props.title}</h2>
//             </header>
//             <section className="card-body">
//                 <p>{props.body}</p> 
//             </section>
//             <footer>
//                 <p>card Footer</p>
//             </footer>
//         </div>
//     )
// }

//----------------class base----------------

// class Card extends Component {


//     render(){


//         return(
//             <div className="card">
//                 <header className="card-header">
//                     <h2>{this.props.title}</h2>
//                 </header>
//                 <section className="card-body">
//                     <p>{this.props.body}</p> 
//                 </section>
//                 <footer>
//                     <p>card Footer</p>
//                 </footer>
//             </div>
//         )
//     }
  
// }

// export default Card;


//----------------class base 2----------------

class Card extends Component {

    eventHandler(e,id){
        console.log(`${this.props.title}`)
        console.log(e)
        console.log(id)
    }

    state={}

    constructor(props){
        super(props);
        console.log('[card.js] run constructor')
      }
    
      static getDerivedStateFromProps(props,state){
        console.log('[card.js] run getDerivedStateFromProps')
        return null; 
      }
    
      componentDidMount(){
        console.log('[card.js] run componentDidMount')
      }
    render(){
        console.log('card render')
        let {title , body}=this.props

        return(
            <div className="card">
                <header className="card-header">
                    <h4>{title}</h4>
                </header>
                <section className="card-body">
                    <p>{body}</p> 
                    <button onClick={this.eventHandler.bind(this,'xxxx')} className="btn btn-primary">
                        click
                    </button>
                </section>
                <footer className="card-footer">
                    <p>card Footer</p>
                </footer>
            </div>
        )
    }
}
export default Card;