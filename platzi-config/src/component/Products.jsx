import React, { useContext } from 'react'

import '../Componentes/styles/Products.css'
import Appcontex from '../context/Appcontex'
import { Product } from './Product'

export const    Products = ( ) => {
    const {state,Addtocart} = useContext(Appcontex)
    const {product} = state
        
    
    const handeadd = product => () =>{
        Addtocart(product)
       
    }

   
    return (
        <div className="Products">
          
            <div className="Products-items">
                {product.map(product => (
                    <Product key={product.id} product1={product}  handeadd={handeadd}/>
                      
                ))}


               
            </div>
        </div>
    )
}
