import server from "./server";

export async function getPeople() {
    try {
        const people = await server.get("/peoples");
        console.log("People has been gotten successfully\n", people);

        return {
            message: "People has been gotten successfully",
            response: people
        };
    } catch (error) {
        console.error(error);

        return {
            message: "Error on getting people",
            response: error
        };
    }
}
