import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('the walking dead')

  const handleInputValue = ( e ) => setInputValue(e.target.value)

  const submit = (e) => {
    e.preventDefault()
    setCategories( (categories) => [inputValue,...categories])
  }

  return (
    <form onSubmit={submit}>
      <input 
        value={inputValue}
        onChange={handleInputValue}
      >
      </input>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory