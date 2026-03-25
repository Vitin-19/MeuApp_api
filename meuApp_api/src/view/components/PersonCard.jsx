import { View, Text, Button } from 'react-native';
import { deletePerson } from '../../server/peopleReqs';
import style from '../styles/style';

const PersonCard = ({person, navigation, refresh}) => {
    return(
        <View style={style.card}>

            <View>
                <Text style={style.name}>{person.firstName} {person.lastName}</Text>
                <Text style={style.email}>{person.email}</Text>
            </View>

            <View>
                <Button
                    title="Edit"
                    onPress={() => navigation.navigate("AddEditScreen", {person: person, action: "edit"})}
                />
                
                <Button
                    title="Delete"
                    onPress={async () => {
                        await deletePerson(person.id);
                        refresh();
                    }}
                />
            </View>

        </View>
    )
}

export default PersonCard;