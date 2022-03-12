import React, { Component } from 'react';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
 import classes from './IceCreamBuilder.module.css';
export default class  extends Component {
    state={
      items:{},
      scoops:[],
      totalPrice:0,
        
    };

    componentDidMount(){
      fetch('https://react-course-e7e73-default-rtdb.firebaseio.com/items.json')
      .then((response)=> response.json())
      .then((responeData) =>{
        this.setState({
          items:responeData,
        })
      });
    }
    // componentDidUpdate(){
    //   console.log('[IceCreamBuilder] update')
    // }
addScoop=(scoop)=>{
  const {scoops,items}=this.state;
  const workingScoops =[...scoops];
  workingScoops.push(scoop);
  this.setState((prevState)=>{
    return{
      scoops:workingScoops,
      totalPrice: prevState.totalPrice + items[scoop],
    }
   
  });
};

removeScoop=(scoop)=>{
  const {scoops,items}=this.state;
  const workingScoops =[...scoops];
  const scoopIndex = workingScoops.findIndex((sc)=> sc===scoop);
  workingScoops.splice(scoopIndex,1); 

 
  this.setState((prevState)=>{
    return{
      scoops:workingScoops,
      totalPrice: prevState.totalPrice-items[scoop],
    }
    
  });
}; 

  render() {
    const { items, totalPrice,scoops} = this.state;
    return (
      <div class={['container',classes.container].join(' ')}>
          <IceCream scoops={scoops} />
          <Builder 
          items={items} 
          price={totalPrice} 
          add={this.addScoop} 
          remove={this.removeScoop}
          scoops={scoops}/>
      </div>
    )
  }
}
