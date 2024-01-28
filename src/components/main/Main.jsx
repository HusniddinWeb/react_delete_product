import { useState } from 'react'
import "./Main.css";

function Main({products, setProducts}) {

    const [select, setSelect] = useState("Ruchka");
    const [soni, setSoni] = useState("");
    const [narxi, setNarxi] = useState("");

    const onForm = (e) => {
        e.preventDefault();
        const newUser = {
            nomi: select,
            soni: soni,
            narxi: narxi,
            id: products.length + 1
        }
        setProducts([...products, newUser]);
    }

  return (
    <div className='main'>

        <h1>Mahsulotlar</h1>

        <form action="" onSubmit={onForm}>

            <select onChange={(e) => setSelect(e.target.value)}>
                <option value="Ruchka">Ruchka</option>
                <option value="Qalam">Qalam</option>
                <option value="Daftar">Daftar</option>
                <option value="Kitob">Kitob</option>
            </select>

            <input
                required 
                type="number" 
                placeholder='soni'
                onChange={(e) => setSoni(e.target.value)} 
            />

            <input
                required 
                type="number" 
                placeholder='narxi'
                onChange={(e) => setNarxi(e.target.value)} 
            />

            <button className='button'>send</button>

        </form>

    </div>
  )
}

export default Main