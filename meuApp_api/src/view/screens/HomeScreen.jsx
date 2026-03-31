import { useEffect, useState } from 'react';
import { Button, FlatList, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { getPeople } from '../../server/peopleReqs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import PersonCard from '../components/PersonCard';
import { MaterialIcons } from "@expo/vector-icons"
import style from '../styles/style';

const HomeScreen = ({ navigation }) => {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState(people);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // load the people from database
    async function loadPeople() {
        setIsLoading(true);
        const response = await getPeople();

        if(response.message === "Error"){
            setError(response.data);
            setIsLoading(false);
            return;
        }

        console.log(response.data);

        if (response.data.length > 0) {
            setPeople(response.data);
            await AsyncStorage.setItem("people", JSON.stringify(response.data))
        } else {
            // if not people on database, try getting from async storage

            const people = JSON.parse(await AsyncStorage.getItem("people"))

            if (!people) return console.warn("No people was found from the last use");

            setPeople(people);
        }
        setIsLoading(false);
    }

    function search() {
        try {
            if (searchTerm.length === 0) {
                setFilteredPeople(people)
            } else {
                const filtered = people.filter((person) => {
                    return person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                });
                setFilteredPeople(filtered);
            }
        } catch (error) {
            console.error("Error on filtering characters\n\n", error);
        }
    }

    function refreshList(){
        loadPeople();
    }

    useEffect(() => {
        loadPeople();
    }, []);
    useEffect(() => { search() }, [searchTerm, people])


    return (
        <View style={style.container}>

            {/* Header */}
            <View style={style.header}>
                <Text style={style.title}>People</Text>
                <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
                    <MaterialIcons name='search' size={32} color="black" />
                </TouchableOpacity>
            </View>

            {/* search bar */}
            {isSearching && (
                <View style={style.field}>
                    <TextInput
                        placeholder='Search'
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                </View>
            )}

            <Button
                title='Add Person'
                onPress={() => navigation.navigate("AddEditScreen", { action: "create" })}
            />

            {error && (
                <Text style={style.error}>Error: {error}</Text>
            )}

            <FlatList
                style={style.list}
                data={filteredPeople}
                keyExtractor={(item) => item.id.toString()}
                onRefresh={refreshList}
                refreshing={isLoading}

                renderItem={({ item }) => (
                    <PersonCard
                        person={item}
                        navigation={navigation}
                        refresh={loadPeople}
                        setIsLoading={setIsLoading}
                    />
                )}
            />

        </View>
    );
}

export default HomeScreen;