
import './FruitItem.css'
import Emoji from "./Emoji";
import PlusminButton from "./PlusminButton";

function FruitItem({fruits, idx, setFruits} ){


return(
    <div className="fruit-item-div">
        <Emoji label={fruits[idx].name} symbol={fruits[idx].emoji}/>
        <h2 className="fruit-item-h2">{fruits[idx].name}</h2>
        <PlusminButton fruits={[...fruits]} idx={idx} setFruits={setFruits}/>
    </div>
);

}

export default FruitItem

