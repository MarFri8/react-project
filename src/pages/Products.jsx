import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/api";
import UserCard from "../components/UserCard";

function Products() {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    /* Använde console.log(users) för att få fram om det var user.name eller något annat. I detta fallat var det username */

    if (isLoading) {
        return <p>Laddar användare...</p>;
    }

    if (error) {
        return (
            <div>
                <h1>Users</h1>
                <p>
                    Vi kunde inte hämta användarna just nu. Försök igen senare.
                </p>
            </div>
        );
    }

    if (!users || users.length === 0) {
        return (
            <div>
                <h1>Users</h1>
                <p>Det finns inga användare att visa.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Users</h1>

            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default Products;
