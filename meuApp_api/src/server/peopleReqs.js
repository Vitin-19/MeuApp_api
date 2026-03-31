import Person from "../model/Person";
import server from "./server";

const verifyPerson = (person) => {
    if(!(person instanceof Person)) throw new Error("Param must be type of Person");
}

export async function createPerson(person) {

    try {
        const newPerson = {
            firstName: person.firstName,
            lastName: person.lastName,
            email: person.email,
            phone: person.phone,
        };

        const response = await server.post("", newPerson);
        console.log("Person has been created successfully");

        return {
            message: "Person has been created successfully",
            data: response
        };
    } catch (error) {
        console.error(error)

        return {
            message: "Error",
            data: error.message
        }
    }
}

export async function editPerson(person) {

    try{
        const response = await server.put(`/${person.id}`, person);
        console.log("Person has been edited successfully")

        return {
            message: "Person has been edited successfully",
            data: response
        };
    }catch(error){
        console.error(error);

        return {
            message: "Error",
            data: error.message
        }
    }
}

export async function deletePerson(id) {
    try {
        await server.delete(`/${id}`);
        console.log("Person has been delected successfully")

        return {
            message:"Person has been delected successfully"
        };
    } catch (error) {
        console.error(error);

        return {
            message: "Error",
            data: error.message
        }
    }
}

export async function getPeople() {
    try {
        const response = await server.get();
        console.log("People has been gotten successfully\n", response.data);

        return {
            message: "People has been gotten successfully",
            data: response.data
        };
    } catch (error) {
        //console.error(error);
        return {
            message: "Error",
            data: error.message
        }
    }
}
