import database from "../../../database";

async function HandlerUser(request, response) {
    try {
        const resp = await database.select().from("visitation");

        return response.json(resp);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export default HandlerUser;
