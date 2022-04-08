import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball'])

  return (
    <>
        <h2>GifExpertApp</h2>
        <hr />

        <AddCategory setCategories={setCategories} />
        <ol>
            {
                categories.map( categorie =>
                    <GifGrid 
                        key={categorie}
                        category={categorie}
                     />
                )
            }
        </ol>
    </>
  )
}

export default GifExpertApp