import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';
import Modal from './Modal/Modal';

 const Builder = ({items,price,add,remove,scoops}) => {
  return (
    <div>
        <div className={classes.Builder}>
            <h3>Buld your own icecream</h3>
            <Items items={items} add={add} remove={remove} scoops={scoops}/>
            <TotalPrice price={price}/>
            <button type="button" className={[classes.order,"rounded"].join(' ')}>Add to Cart</button>
        </div>
        <Modal>
            HEllo Bangladesh
        </Modal>
         
    </div>
  )
}
export default Builder;