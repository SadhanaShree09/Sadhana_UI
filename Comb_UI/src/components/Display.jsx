import Detail from "./Detail";

function Display({ user = {} }) {
  return (
    <div className="user-card">
        <h2 className="user-name">{user?.name || "No Name"}</h2>
        <Detail age={user?.age} location={user?.location} role={user?.role} />
    </div>
  )
}

export default Display