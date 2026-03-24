import Person from "../model/Person";
import server from "./server";

const verifyPerson = (person) => {
    if(!(person instanceof Person)) throw new Error("Param must be type of Person");
}

export async function createPerson(person) {

    try {
        const newPerson = new Person(null, person.firstName, person.lastName, person.email, person.phone);

        const response = await server.post("/peoples", newPerson);
        console.log("Person has been created successfully");

        return {
            message: "Person has been created successfully",
            response: response
        };
    } catch (error) {
        console.error(error)

        throw new Error(error);
    }
}

export async function editPerson(person) {

    try{
        const response = await server.put(`/peoples/${person.id}`, person);
        console.log("Person has been edited successfully")

        return {
            message: "Person has been edited successfully",
            response: response
        };
    }catch(error){
        console.error(error);

        throw new Error(error);
    }
}

export async function deletePerson(id) {
    try {
        await server.delete(`/peoples/${id}`);
        console.log("Person has been delected successfully")

        return "Person has been delected successfully";
    } catch (error) {
        console.error(error);

        throw new Error(error);
    }
}

export async function getPeople() {
    try {
        const people = await server.get("/people");
        console.log("People has been gotten successfully\n", people);

        return {
            message: "People has been gotten successfully",
            response: people
        };
    } catch (error) {
        console.error(error);
        return {
            message: "Error",
            response: null
        }
        throw new Error(error);
    }
}