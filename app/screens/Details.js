import React, {useState, useEffect} from 'react';
import {StyleSheet,Text,View,Image,Linking} from 'react-native';
import { color } from 'react-native-reanimated';

import colors from '../config/colors';

const Details = ({article, route}) => {

    const [chosenArticle, setchosenArticle] = useState();
    const [noImage, setNoImage] = useState(false);

    // find which article had been pressed in article component by using route parameters
    const {chosenTitle, cleanedTime} = route.params;
    const pickedArticleIndex = article.findIndex(i => i.title === chosenTitle)
    useEffect(() => {
        setchosenArticle(article[pickedArticleIndex])
    }, []);

    const openLinkinBrowser = () => {
        Linking.openURL(chosenArticle.url)
        .catch((err) => console.error('Unable to open link in browser', err))
    };

    if (!chosenArticle) {
        return (
            <Text>No article chosen</Text>
        );
    }

    return (
        <View style={styles.detailsContainer}>
            <Image style={styles.detailsImage}
                source={{
                        width: 300,
                        height: 300,
                        borderStyle: "solid",
                        uri: `${
                            chosenArticle.urlToImage
                        }`
                    }}
                    accessibilityLabel="Image from news article"
                    onError={() => setNoImage(true)}/>
                    {noImage && <Text style={styles.detailsNoImage}>Image not supplied</Text>}
            <Text style={styles.detailsUrl}>
                Source: {chosenArticle.url}</Text>
            <Text style={styles.detailsTitle}
                onPress={openLinkinBrowser}>
                {chosenArticle.title}</Text>
                   <Text style={styles.detailsAuthor}>
                   {chosenArticle.author}</Text>
                   <Text style={styles.detailsPublishedAt}>
                   {cleanedTime}</Text>
            <Text style={styles.detailsContent}>
                {chosenArticle.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        alignItems: "center",
        margin: 30
    },
    detailsImage: {
        borderWidth: 1,
        borderColor: colors.black,
        margin: 5
    },
    detailsNoImage: {
        position: "relative",
        transform: [{translateY: -150}],
        fontSize: 30
    },
    detailsUrl: {
        fontSize: 8,
        marginBottom: 15
    },
    detailsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        padding: 25,
        width: 400,
        backgroundColor: colors.primaryLowAlpha
    },
    detailsAuthor: {
        fontSize: 12,
        fontStyle: 'italic',
        alignSelf: "flex-end"
    },
    detailsPublishedAt: {
        fontSize: 8,
        alignSelf: "flex-end",
        marginBottom: 35
    },
    detailsContent: {
        fontSize: 14
    }
});

export default Details;
