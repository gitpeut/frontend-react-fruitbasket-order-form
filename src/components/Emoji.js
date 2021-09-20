import './FruitItem.css'

function Emoji( {label, symbol} ){

return(
    <div role="img" aria-label={label} className="fruit-item-h2">
        {String.fromCodePoint(symbol)}
    </div>
);

}

export default Emoji