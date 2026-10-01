function UserCard({ user }) {
    return (
        <div>
            <h2>{user.username}</h2>
            <p>User ID: {user.id}</p>
        </div>
    );
}

export default UserCard;
