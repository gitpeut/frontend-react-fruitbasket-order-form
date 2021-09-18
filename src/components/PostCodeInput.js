function PostCodeInput({children, name, naw, setNaw}) {

    const labelName = 'Input' + name;
    let inputValue = name[name];

    return (
        <label htmlFor={labelName}>
            {children}
            <input
                type="text"
                id={labelName}
                key={labelName}
                name={name}
                onChange={(e) => {

                    inputValue = e.target.value;
                    // remove all whitespace and convert to upper case
                    inputValue = inputValue.replace(/\s/g, '').toUpperCase();
                    //match to four digits followed by two alphabetic characters
                    if (inputValue.match('[0-9]{4}[A-Z]{2}')) {
                        naw[name] = inputValue;
                        setNaw(naw);
                        //console.log('postcode ok: ' + inputValue);
                    } else {
                        //console.log('postcode fout: ' + inputValue);
                        // set the  postcode field to - when wrong
                        naw[name] = "-";
                        setNaw(naw);
                    }
                }
                }
            />
            {naw[name] === "-" && <p className="warningp">Geef een geldige postcode</p>}
        </label>
    )
}

export default PostCodeInput