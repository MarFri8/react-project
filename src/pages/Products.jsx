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

    /* Använde console.log(users) för att få fram om det var user.name eller något annat. I detta fallat var det username */

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
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;
