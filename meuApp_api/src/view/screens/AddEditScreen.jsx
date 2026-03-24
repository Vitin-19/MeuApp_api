import { useState } from 'react';
import { View, TextInput, Button} from "react-native"
import { editPerson, createPerson } from '../../server/peopleReqs';
import style from '../styles/style';

const AddEditScreen = ({navigation, person}) => {
    const [firstName, setFirstName] = useState(person?.firstName || "");
    const [lastName, setLastName] = useState(person?.lastName || "");
    const [email, setEmail] = useState(person?.email || "");
    const [phone, setPhone] = useState(person?.phone || "");

    async function save(person) {
        if(person){
            await editPerson(person)
        }else{
            await createPerson(person)
        }
        navigation.goBack();
    }

    return(
        <View style={style.container}>
            <TextInput
                placeHolder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                placeHolder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                placeHolder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
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

export default AddEditScreen