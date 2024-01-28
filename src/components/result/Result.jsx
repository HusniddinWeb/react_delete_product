import React from 'react'
import "./Result.css"
import ShopCard from './ShopCard'
import { GrAddCircle } from "react-icons/gr";
import { HiMinusCircle } from "react-icons/hi";

function Result({products, setProducts}) {
  return (
    <div className='result'>
        <div className='result-block'>
            
            <table>
                <thead>
                    <tr>
                        <th>N0</th>
                        <th>Nomi</th>
                        <th>Soni</th>
                        <th>Narxi</th>
                        <th>Umumiy narxi</th>
                        <th><span><HiMinusCircle /></span></th>
                    </tr>
                </thead>
                <tbody> 
                    {products.length > 0 ?
                        products.map((item, index) => (
                            <ShopCard key={index} {...item} setProducts={setProducts} products={products} />
                        ))
                        : <h2><GrAddCircle /></h2>
                    }
                </tbody>
            </table>

            
        </div>
    </div>
  )
}

export default Result