import {BsTrash} from "react-icons/bs";


function Wish({wish, removeWish}) {

    return (
        <div key={wish.id} className="flex justify-between border-2 my-1 p-1">
            <div className="ml-2 mr-2">
                <span>{wish.wish}</span>
            </div>
            <div className="flex">
                <button onClick={() => removeWish(wish.id)} className="mr-2"><BsTrash/></button>
            </div>
        </div>
    )
}

export default Wish;