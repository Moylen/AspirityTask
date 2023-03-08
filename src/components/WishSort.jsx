import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";


function WishSort({wishes, sortWishesByAsc, sortWishesByDesc}) {

    if (wishes.length !== 0) {
        return (
            <div className="flex justify-around mt-1">
                <div>
                    <button onClick={() => sortWishesByAsc()} className="outline-none"><AiOutlineArrowDown/></button>
                </div>
                <div>
                    <button onClick={() => sortWishesByDesc()} className="outline-none"><AiOutlineArrowUp/></button>
                </div>
            </div>
        )
    }
    return null
}

export default WishSort