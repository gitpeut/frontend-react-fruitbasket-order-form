
import './PlusMinButton.css'

function PlusminButton( {fruits, idx, setFruits } ){

 function changeCount(e){
     const thisId = e.target.id;

     switch ( thisId.split('-')[0] ) {
         case 'min':
             if ( fruits[idx].count > 0) {
                 fruits[idx].count = Number(fruits[idx].count) - 1;
                 setFruits(fruits);
             }
             break;
        case 'plus':
            fruits[idx].count = Number(fruits[idx].count) + 1;
            setFruits(fruits);
            break;
        case 'manual':
            fruits[idx].count =  Number(e.target.value);
            if ( fruits[idx].count < 0) {
                fruits[idx].count = 0;
            }
            setFruits( fruits );
            break;
        default:
            break;
    }
    if ( fruits[idx].count ){
       document.getElementById( 'fruititem'+idx ).parentElement.classList.add("itemglow");
    }else{
        document.getElementById( 'fruititem'+idx ).parentElement.classList.remove("itemglow");
    }
 }

return(

    <div id={'fruititem'+ idx} className="plusmin-div">
        <button className="plusmin-sign" id={"min-"+idx}
                onClick={ (e) =>{changeCount(e);}  }

        >-</button>
        <input min="0" max="100" type="number" className="plusmin-input" value={ Number(fruits[idx].count) && fruits[idx].count} id={"manual-"+idx}
                onChange={ (e) =>{changeCount(e);}  }
        />
        <button className="plusmin-sign" id={"plus-"+idx}
                onClick={ (e) =>{changeCount(e);}  }
        >+</button>
    </div>
)

}

export default PlusminButton