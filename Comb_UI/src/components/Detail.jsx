function Detail({ age, location, role }) {
  return (
    <div className="user-details">
      <p className="user-detail-item">Age: {age}</p>
      <p className="user-detail-item">Location: {location}</p>
      <p className="user-detail-item">Role: {role}</p>
    </div>
  );
}

export default Detail;