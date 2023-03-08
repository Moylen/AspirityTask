import {useState} from "react";
import Wish from "./components/Wish";
import WishForm from "./components/WishForm";
import WishSort from "./components/WishSort";


function App() {
    const [wishes, setWishes] = useState(JSON.parse(localStorage.getItem('wishes')))
    localStorage.setItem('wishes', JSON.stringify(wishes))

    const addWish = (userInput) => {
        if (userInput) {
            const newItem = {
                id: new Date(),
                wish: userInput
            }
            setWishes([...wishes, newItem])
        }
    }

    const removeWish = (id) => setWishes([...wishes.filter((wish) => wish.id !== id)])

    const sortWishesByAsc = () => setWishes([...wishes.sort((a, b) => a.wish > b.wish ? 1 : -1)])

    const sortWishesByDesc = () => setWishes([...wishes.sort((a, b) => a.wish < b.wish ? 1 : -1)])

    return (
        <div className='flex'>
            <div className="flex-col mx-auto">
                <div className='flex'>
                    <h1 className='m-auto'>WishList</h1>
                </div>
                <WishForm addWish={addWish}/>
                <WishSort wishes={wishes} sortWishesByAsc={sortWishesByAsc} sortWishesByDesc={sortWishesByDesc}/>
                {wishes.map((wish) => {
                    return (
                        <Wish
                            wish={wish}
                            key={wishes.id}
                            removeWish={removeWish}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default App;
