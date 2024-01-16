import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";

function ShopCard({nomi, soni, narxi, products, setProducts, id,}) {

    const onButton = () =>{
        const fltred = products.filter((item) => item.id !== id);
        setProducts(fltred)
    }

  return (

    <tr>
        <td>{id}</td>
        <td>{nomi}</td>
        <td>{soni}</td>
        <td>{narxi}</td>
        <td>{narxi * soni}</td>
        <td><button onClick={onButton}><AiTwotoneDelete /></button></td>
    </tr>
  )
}

export default ShopCard