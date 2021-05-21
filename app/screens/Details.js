import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const Details = ({article, route}) => {

    const [chosenArticle, setchosenArticle] = useState();

    // find which article had been pressed in article component by using route parameters
    const {chosenTitle, cleanedTime} = route.params;
    const pickedArticleIndex = article.findIndex(i => i.title === chosenTitle)
    useEffect(() => {
        setchosenArticle(article[pickedArticleIndex])
    }, []);

    if (!chosenArticle) {
        return (
            <Text>No article chosen</Text>
        );
    }

    return (
        <View style={
            styles.detailsContainer
        }>
            <Image style={
                    styles.detailsImage
                }
                source={
                    {
                        width: 300,
                        height: 300,
                        borderStyle: "solid",
                        uri: `${
                            chosenArticle.urlToImage
                        }`
                    }
                }/>
            <Text style={
                styles.detailsTitle
            }>
                {
                chosenArticle.title
            }</Text>
            <Text style={
                styles.detailsAuthor
            }>
                {
                chosenArticle.author
            }</Text>
            <Text style={
                styles.detailsPublishedAt
            }>
                {cleanedTime}</Text>
            <Text style={
                styles.detailsUrl
            }>
                Source: {
                chosenArticle.url
            }</Text>
            <Text style={
                styles.detailsContent
            }>
                {
                chosenArticle.content
            }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        margin: 30
    },
    detailsImage: {
        borderWidth: 1,
        borderColor: "black"

    },
    detailsTitle: {
        fontSize: 20,
        fontWeight: "bold"

    },
    detailsAuthor: {
        fontSize: 14,
        fontStyle: 'italic'
    },
    detailsPublishedAt: {
        fontSize: 8

    },
    detailsUrl: {
        fontSize: 8

    },
    detailsContent: {
        fontSize: 14

    }
});

export default Details;
