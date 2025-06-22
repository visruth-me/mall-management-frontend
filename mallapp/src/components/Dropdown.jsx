const Dropdown = ({locked,hovered,buttonSets,setHovered}) => {
    const activeKey = locked || hovered;
    if (activeKey){
        return(
            <div 
            className="dropdown-container"
            onMouseLeave={() => {
                if (!locked) setHovered('');
            }}
            >
            {buttonSets[activeKey].map((btnText) => (
                <button
                key={btnText}
                className="dropdown-button"
                >
                {btnText}
                </button>
            ))}
            </div>
        )
    }

    return null;
}

export default Dropdown