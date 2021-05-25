import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native';


import CleanTime from '../components/CleanTime';

const Article = ({
    urlToImage,
    title,
    author,
    description,
    publishedAt,
    navigation
}) => {

    let cleanedTime = CleanTime(publishedAt);

    return (
        <Pressable style={
                styles.articleContainer
            }
            onPress={
                () => {
                    navigation.navigate("Details", {
                        chosenTitle: title,
                        cleanedTime: cleanedTime
                    });
                }
        }>
            <Image style={
                    styles.articleImage
                }
                source={
                    {
                        width: 100,
                        height: 100,
                        borderStyle: "solid",
                        uri: `${urlToImage}`
                    }
                }/>
            <View style={
                styles.articleInformation
            }>
                <Text style={
                    styles.articleTitle
                }>
                    {title}</Text>
                <Text style={
                    styles.articleAuthor
                }>
                    {author}</Text>
                <Text style={
                    styles.articleDescription
                }>
                    {description}</Text>
                <Text style={
                    styles.articlePublishedAt
                }>
                    {cleanedTime} </Text>
            </View>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    articleContainer: {
        flex: 1,
        width: 400,
        flexDirection: "row",
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "grey",
        borderStyle: "solid",
        padding: 10,
        justifyContent: "center",
    },
    articleImage: {
        borderWidth: 1,
        borderColor: "black"
    },
    articleTitle: {
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 5
    },
    articleInformation: {
        flex: -1,
        marginLeft: 10
    },
    articleAuthor: {
        fontSize: 10,
        fontWeight: "100",
        fontStyle: "italic",
        marginBottom: 5
    },
    articleDescription: {
        fontSize: 8,
        marginBottom: 5
    },
    articlePublishedAt: {
        fontSize: 8
    }
});

export default Article;
