import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/api";
import UserCard from "../components/UserCard";

function Users() {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
        retry: false /* Med tanke på att vi har 100 anrop per dag så är det bättre att den inte försöker igen om den misslyckas, utan istället ger oss felmedelandet */,
    });

    /* Använde console.log(users) för att få fram om det var user.name eller något annat. I detta fallat var det username */

    if (isLoading) {
        return <p>Laddar användare...</p>;
    }

    if (error) {
        let errorMessage = "Något gick fel. Försök igen senare.";

        if (error.message === "API_KEY_ERROR: 401") {
            errorMessage = "Vi kunde inte ansluta till användartjänsten.";
        }

        if (error.message === "NOT_FOUND: 404") {
            errorMessage = "Användardatan kunde inte hittas.";
        }

        if (error.message === "SERVER_ERROR: 500") {
            errorMessage =
                "Användartjänsten har problem just nu. Försök igen senare.";
        }

        return (
            <div>
                <h1>Users</h1>
                <p>{errorMessage}</p>
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

export default Users;
