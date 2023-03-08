import {useState} from "react";

function WishForm({addWish}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addWish(userInput)
        setUserInput("")
    }

    return (
        <form onSubmit={handleSubmit} className='mt-2 box-border flex'>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Введите желаемое"
                className='border-2 mr-2 p-1 grow outline-none'
            />
            <button className='border-2 p-1'>Добавить</button>
        </form>
    )
}

export default WishForm