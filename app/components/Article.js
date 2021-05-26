import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import CleanTime from '../components/CleanTime';
import colors from '../config/colors';

const Article = ({urlToImage, title, author, description, publishedAt, navigation}) => {

    const [noImage, setNoImage] = useState(false);

    let cleanedTime = CleanTime(publishedAt);

    return (
        <TouchableHighlight style={styles.articleContainer}
            onPress={
                () => {
                    navigation.navigate("Details", {
                        chosenTitle: title,
                        cleanedTime: cleanedTime
                    });
                }
        }
        underlayColor={colors.primaryLowAlpha}
        activeOpacity={0.9}>
            <View style={
                styles.articleInnerContainer
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
                    } 
                    accessibilityLabel="Image from news article"
                    onError={() => setNoImage(true)}/>
                    {noImage && <Text style={styles.articleNoImage}>Image not supplied</Text>}
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
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    articleContainer: {
        flex: 1,
        width: 400,
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderColor: colors.grey,
        borderStyle: "solid",
    },
    articleInnerContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 15,
    }, 
    articleImage: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 50
    },
    articleNoImage: {
        position: "relative",
        transform: [{translateX: -100}],
        fontSize: 10,
        width: 100,
        height: 100,
        marginRight: -100,
        lineHeight: 100,
        textAlign: "center"
    },
    articleTitle: {
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 5
    },
    articleInformation: {
        flex: 1,
        marginLeft: 15
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
