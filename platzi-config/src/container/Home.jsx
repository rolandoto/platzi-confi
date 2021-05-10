import React from 'react'

import { Products} from '../component/Products'
import InitialStacte from '../InitialStacte'


const Home = () => {


    return (
        <div>
           
           
          {/**aqui entro al initial state saclos la informacion del estado */}
           <Products  productos={InitialStacte.product} />
          
           
        </div>
    )
}

export default Home
