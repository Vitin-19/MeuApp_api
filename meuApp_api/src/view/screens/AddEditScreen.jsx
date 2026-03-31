import { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from "react-native"
import { editPerson, createPerson } from '../../server/peopleReqs';
import style from '../styles/style';
import Person from '../../model/Person';
import { delay } from '../../utils/delay';

const AddEditScreen = ({navigation, route}) => {
    const person = route?.params?.person;
    const action = route?.params?.action;

    const [firstName, setFirstName] = useState(person?.firstName || null);
    const [lastName, setLastName] = useState(person?.lastName || null);
    const [email, setEmail] = useState(person?.email || null);
    const [phone, setPhone] = useState(person?.phone || null);
    const [error, setError] = useState("");

    async function save() {
        let newPerson = new Person(null, firstName, lastName, email, phone);

        if(newPerson.isNull()){
            setError("All fields must be filded");
            return;
        }

        const isValidEmail = newPerson.email.includes("@") && 
        newPerson.email.includes(".") && 
        newPerson.email.indexOf("@") < newPerson.email.lastIndexOf(".");

        if(!isValidEmail){
            setError("Invalid Email");
            return;
        } 
        if(newPerson.phone.length != 11){
            setError("Invalid Phone");
            return;
        }   

        let response;

        if(action === "edit"){
            newPerson.id = person.id;
            response = await editPerson(newPerson);
        }else{
            response = await createPerson(newPerson);
        }

        if(response.message === "Error"){
            setError("Erro ao salvar pessoa");
            await delay(3000);
        }


        navigation.replace("Home");
    }

    useEffect(() => {
        console.log(person);
    },[])

    return(
        
        <View style={style.container}>
            <TextInput
                style={style.field}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={style.field}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={style.field}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={style.field}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />
            
            {error && (
                <Text style={style.error}>Error: {error}</Text>
            )}

            <View style={{marginBottom:10}}>
                <Button
                    title="Save"
                    onPress={save}
                />
            </View>

            <Button
                title="Cancel"
                onPress={() => navigation.goBack()}            
            />
        </View>
    )
}

export default AddEditScreen;