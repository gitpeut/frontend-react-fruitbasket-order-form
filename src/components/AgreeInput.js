import './AgreeInput.css';

function AgreeInput({children, name, naw, setNaw}) {
    const labelName = 'Input' + name;

    return (
        <label htmlFor={labelName}>
            <input
                className="agree"
                type="checkbox"
                id={labelName}
                key={labelName}
                name={name}
                checked={name[name]}
                onChange={(e) => {
                    naw[name] = e.target.checked;
                    setNaw(naw);
                }}
            />
            {children}
        </label>
    );

}

export default AgreeInput