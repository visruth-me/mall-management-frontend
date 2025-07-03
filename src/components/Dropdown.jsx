const Dropdown = ({locked, hovered, buttonSets, setHovered}) => {
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
                onClick = {() => {
                    const path = btnText === 'Login' ? 'login' : 'signup'
                    window.location.href = `/${path}`
                }}
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