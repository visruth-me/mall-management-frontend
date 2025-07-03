const AdminDashboard = ({buttonSets, setHovered, locked, setLocked}) => {
    return(
        <div className="admin-dashboard">
        {Object.keys(buttonSets).map((key) => (
          <button
            key={key}
            onMouseEnter={() => {
              if (!locked) setHovered(key);
            }}
            onClick={() => {
              if (locked === key) {
                setLocked('');
                setHovered('');
              } else {
                setLocked(key);
                setHovered(key);
              }
            }}
            className={` ${locked === key ? 'active' : ''}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    )
}

export default AdminDashboard