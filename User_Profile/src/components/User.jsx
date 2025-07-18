import Details from "./Details"

function User({user}) {
    return(
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition duration-300 ease-in-out border border-gray-200">
            <h2 className="text-xl font-semibold text-green-800 mb-4 text-center underline decoration-pink-400">{user.name}</h2>
            <Details age={user.age} location={user.location} role={user.role} />
        </div>
    )
}

export default User