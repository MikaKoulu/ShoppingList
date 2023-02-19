import { useQuery } from "@apollo/client";
import { Text, FlatList } from "react-native";
import { gql } from "@apollo/client";

export default function Handling() {
    //Handling queries example

    const BooksQuery = gql`
query Books {
  books {
    title
  }
}
`
    const { data, loading } = useQuery(booksQuery); //Execute

    const TestItem = ({ books }) => {

        const { title } = books; //get the names

        return (
            <Text> {title}</Text>
        );
    }
    if (loading) {
        return <Text>Fetching data...</Text>
    }

    /*return(
    <FlatList
    data={data.books}
    renderItem={({item}) => <TestItem books={item} />}
    keyExtractor={(item, index) => index}
    />
    );
    */
};
