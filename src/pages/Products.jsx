import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/api";

function Products() {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isLoading) {
        return <p>Laddar användare...</p>;
    }

    if (error) {
        return (
            <p>Vi kunde inte hämta användarna just nu. Försök igen senare.</p>
        );
    }

    if (!users || users.length === 0) {
        return <p>Det finns inga användare att visa.</p>;
    }

    return (
        <div>
            <h1>Users</h1>

            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;
