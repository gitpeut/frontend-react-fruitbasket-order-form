function TextInput({children, name, naw, setNaw}) {

    const labelName = 'Input' + name;
    return (
        <label htmlFor={labelName}>
            {children}
            <input
                type="text"
                id={labelName}
                key={labelName}
                name={name}
                value={name[name]}
                onChange={(e) => {
                    naw[name] = e.target.value;
                    setNaw(naw);
                }}
            />
        </label>
    )

}

export default TextInput