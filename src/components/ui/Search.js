import React, {useState} from 'react';


const Search = ({getQuery}) => {
    const [text, setText] = useState('') // set empty string by default

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <form>
            <input 
                type='text' 
                className='form-control'
                placeholder='Search Characters' 
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus

        />
        </form>
    )
}

export default Search
