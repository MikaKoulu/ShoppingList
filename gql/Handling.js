import { useQuery } from "@apollo/client";
import { Text, FlatList, Pressable, SafeAreaView } from "react-native";
import { gql } from "@apollo/client";

//Test query handling to make sure connection to api working
const Get_Books = gql`
    query Query {
        books {
          title
        }
      }
`;

const Handling = props => {
    const { loading, error, data } = useQuery(Get_Books);
    console.log("Error: ", error)
    console.log("data: ", data)

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error loading books feed </Text>;
    return (
        <SafeAreaView>
            <FlatList
                data={data.books} //items will show if everything works here!
                renderItem={({ item }) => 
                (<Text numberOfLines={1} style={{ textAlign: "center", fontSize: 15, }}
                > 
                {item.title}
                </Text>
                )}
/>
                </SafeAreaView>
    )

};
            Handling.navigationOptions = {
                title: 'Handling'
};

            export default Handling;