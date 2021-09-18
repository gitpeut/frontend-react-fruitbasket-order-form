function AgeInput({children, name, naw, setNaw}) {

    const labelName = 'Input' + name;
    let inputValue = name[name];


    return (
        <label htmlFor={labelName}>
            {children}
            <input min="18" max="150"
                   type="number"
                   id={labelName}
                   key={labelName}
                   name={name}
                   value={naw[name]}
                   onChange={(e) => {
                       inputValue = e.target.value;
                       if (inputValue < 18 || inputValue > 150) {
                           naw[name] = "";
                       } else {
                           naw[name] = inputValue;
                           setNaw(naw);
                       }
                   }}
            />
            {inputValue && (inputValue < 18 || inputValue > 150) &&
            <p className="warningp">U moet boven de 18 en onder de 150 zijn</p>}

        </label>
    )

}

export default AgeInput