
import './RemarkInput.css';

function RemarkInput( {children, name, naw, setNaw} ){

    const labelName = 'remarkInput' + name;
    let remarkLen = 0;

return(
    <>
    <label>{ children }</label>
    <label htmlFor={labelName} className="agree">

        <textarea rows="5" cols="40"
            className="agree-area"
            id={labelName}
            key={labelName}
            name={name}
            value={ name[name] }
            placeholder="Heeft u nog opmerking of speciale wensen? Laat het ons hier weten!"
            onChange={(e)=>{
                remarkLen = e.target.value.length;
                if (  remarkLen <= 200  ){
                    naw[name] = e.target.value;
                    setNaw(naw);
                }
            } }
        />

        {  naw[name].length < 200 && <p className="okp "> Nog {200-naw[name].length } tekens over</p> }
        { (naw[name].length >= 200 ) && <p className="warningp"> De tekst is langer dan 200 tekens. De laatste tekens verdwijnen!</p> }
    </label>

    </>
)

}

export default RemarkInput