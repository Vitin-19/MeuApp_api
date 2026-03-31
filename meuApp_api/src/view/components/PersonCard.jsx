import { View, Text, Button } from 'react-native';
import { deletePerson } from '../../server/peopleReqs';
import style from '../styles/style';

const PersonCard = ({person, navigation, refresh, setIsLoading}) => {
    return(
        <View style={style.card}>

            <View>
                <Text style={style.name}>{person.firstName} {person.lastName}</Text>
                <Text style={style.email}>{person.email}</Text>
            </View>

            <View>
                <View style={{marginBottom:10}}>
                    <Button
                        title="Edit"
                        onPress={() => navigation.navigate("AddEditScreen", {person: person, action: "edit"})}
                    />
                </View>
                
                <Button
                    title="Delete"
                    onPress={async () => {
                        setIsLoading(true);
                        await deletePerson(person.id);
                        setIsLoading(false);
                        refresh();
                    }}
                />
            </View>

        </View>
    )
}

export default PersonCard;