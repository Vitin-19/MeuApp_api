import { useEffect, useState } from 'react';
import { View, TextInput, Button} from "react-native"
import { editPerson, createPerson } from '../../server/peopleReqs';
import style from '../styles/style';
import Person from '../../model/Person';

const AddEditScreen = ({navigation, route}) => {
    const person = route?.params?.person;
    const action = route?.params?.action;

    const [firstName, setFirstName] = useState(person?.firstName || null);
    const [lastName, setLastName] = useState(person?.lastName || null);
    const [email, setEmail] = useState(person?.email || null);
    const [phone, setPhone] = useState(person?.phone || null);

    async function save() {
        let newPerson = new Person(null, firstName, lastName, email, phone);

        if(action === "edit"){
            newPerson.id = person.id;
            await editPerson(newPerson);
        }else{
            await createPerson(newPerson);
        }
        navigation.goBack();
    }

    useEffect(() => {
        console.log(person);
    },[])

    return(
        
        <View style={style.container}>
            <TextInput
                style={style.field}
                placeHolder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={style.field}
                placeHolder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={style.field}
                placeHolder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={style.field}
                placeHolder="Phone"
                value={phone}
                onChangeText={setPhone}
            />
            <Button
                title="Save"
                onPress={save}
            />
            <Button
                title="Cancel"
                onPress={() => navigation.goBack()}            
            />
        </View>
    )
}

export default AddEditScreen;