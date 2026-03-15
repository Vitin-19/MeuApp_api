import Person from "../model/Person";
import server from "./server";

const verifyPerson = (person) => {
    if(!(person instanceof Person)) throw new Error("Param must be type of Person");
}

async function createPerson(person) {
    verifyPerson(person);

    try {
        const response = await server.post("/peoples", person);
        console.log("Person has been created successfully");

        return {
            message: "Person has been created successfully",
            response: response
        };
    } catch (error) {
        console.error(error)

        return {
            message: "Error on creating person",
            response: error
        };
    }
}

async function editPerson(person) {
    verifyPerson(person);

    try{
        const response = await server.put(`/peoples/${person.id}`, person);
        console.log("Person has been edited successfully")

        return {
            message: "Person has been edited successfully",
            response: response
        };
    }catch(error){
        console.error(error);
        return {
            message: "Error on editing person",
            response: error
        };
    }
}

async function deletePerson(id) {
    try {
        await server.delete(`/peoples/${id}`);
        console.log("Person has been delected successfully")

        return "Person has been delected successfully";
    } catch (error) {
        console.error(error);

        return "Error on deleting person";
    }
}
