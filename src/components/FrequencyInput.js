function FrequencyInput({children, name, naw, setNaw}) {
    const labelName = 'Input' + name;
    let inputValue = name[name];

    return (
        <label htmlFor={labelName}>
            {children}
            <select name={labelName} id={labelName} key={labelName}
                    onChange={(e) => {
                        inputValue = e.target.value;

                        naw[name] = inputValue;
                        setNaw(naw);

                    }}>
                <option value="wekelijks" defaultChecked={true}>Wekelijks</option>
                <option value="twee-wekelijks">Om de week</option>
                <option value="maandelijks">Maandelijks</option>
            </select>
        </label>
    )


}

export default FrequencyInput