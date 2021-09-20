function TimeofdayInput({children, name, naw, setNaw}) {
    const labelName = 'Input' + name;
    let inputValue = name[name];

    function radioClick(e) {
        inputValue = e.target.value;
        naw[name] = inputValue;
        setNaw(naw);
//            console.log( e.target.id + ' is '+ e.target.checked);

    }

    return (
        <>
            <label>
                {children}
                <input type="radio" id={labelName + 'dag'} name={labelName} value="dag" defaultChecked={true}
                       className="radiobutton"
                       onClick={(e) => radioClick(e)}
                />
                <label htmlFor={labelName + 'dag'} className="radiolabel">Overdag</label>

                <input type="radio" id={labelName + 'avond'} name={labelName} value="avond" className="radiobutton"
                       onClick={(e) => radioClick(e)}
                />
                <label htmlFor={labelName + 'avond'} className="radiolabel">Avond</label>
            </label>

        </>
    );


}

export default TimeofdayInput