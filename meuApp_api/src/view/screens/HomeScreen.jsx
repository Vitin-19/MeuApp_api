import { useEffect, useState } from 'react';
import { Button, FlatList, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { getPeople } from '../../server/peopleReqs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import PersonCard from '../components/PersonCard';
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import style from '../styles/style';

const HomeScreen = ({navigation}) => {
    const [people,setPeople] = useState([]);
    const [filteredPeople,setFilteredPeople] = useState(people);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    // load the people from database
    async function loadPeople() {
        const response = await getPeople();
        console.log(response.message);

            // if(response.response.length){
            //     setPeople(response.response)
            // }else{
            //     // if not people on database, try getting from async storage

            //     const people = JSON.stringify(await AsyncStorage.getItem("people"))

            //     if(!people) return console.warn("No people was found from the last use");

            //     setPeople(people);
            // }

        setPeople(response.response);

    }

    // function search() {
    //     try {
    //         if(searchTerm.length === 0){
    //             setFilteredPeople(people)
    //         }else{
    //             const filtered = people.filter((person) => {
    //                 return person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    //             });
    //             setFilteredPeople(filtered);
    //         }
    //     } catch (error) {
    //         console.error("Error on filtering characters\n\n", error);
    //     }
    // }

    useEffect(() => loadPeople(), []);
    // useEffect(() => search(), [searchTerm, people])


    return(
        <View style={style.container}>

            {/* Header */}
            {/* <View>
                <Text>People</Text>
                <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
                    <MaterialIcons name='search' size={32} color="black"/>
                </TouchableOpacity>
            </View>

            {/* search bar */}
            {/* {isSearching && (
                <View>
                    <TextInput
                        placeholder='Search'
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                </View>
            )} */}

            <Button
                title='Add Person'
                onPress={() => navigation.navigate("AddEditScreen")}
            />

            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({item}) => (
                    <PersonCard
                        person={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />

        </View>
    );
}

export default HomeScreen;