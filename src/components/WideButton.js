import './WideButton.css'

function WideButton({children, fruits}) {

    let buttonType = "submit";
    let buttonId = "sendBasket";

    if (children === "Reset") {
        buttonType = "reset";
        buttonId = "resetBasket"
    }

    return (
        <button id={buttonId} type={buttonType} className="wide-button">
            {children}
        </button>
    );

}

export default WideButton