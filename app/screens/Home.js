import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

import Article from '../components/Article';
import {API_KEY} from '@env';


const Home = ({navigation, article, setArticle}) => {


    const SEARCH_PREFERENCES = {
        pageSize: '10',
        page: '1'
    }
    const API_URL = `https://newsapi.org/v2/top-headlines?country=au&pageSize=${
        SEARCH_PREFERENCES.pageSize
    }&page=${
        SEARCH_PREFERENCES.page
    }`

    const getArticles = async () => {
        try {
            const data = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-Api-Key': API_KEY
                }
            });
            const dataJSON = await data.json();
            setArticle(dataJSON.articles);
        } catch (error) {
            console.log(error);
        }

    }

    // make call to API on page load
    useEffect(() => {
        getArticles();
    }, []);

    // display alternate view if unable to get data from API
    if (!article) {
        return (
            <View style={
                styles.container
            }>
                <View style={
                    styles.background
                }></View>
                <Text>No articles found...check API key or connection</Text>
            </View>
        )
    }

    return (
        <ScrollView style={
            styles.homeContainer
        }>
            <Text style={
                styles.homeTitle
            }>Latest News from NewsAPI</Text>
            <Text> {
                article.map(article => <Article key={
                        article.title
                    }
                    urlToImage={
                        article.urlToImage
                    }
                    title={
                        article.title
                    }
                    author={
                        article.author
                    }
                    description={
                        article.description
                    }
                    publishedAt={
                        article.publishedAt
                    }
                    navigation={navigation}/>)
            }</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    homeTitle: {
        fontSize: 24,
        backgroundColor: "teal",
        padding: 10,
        color: "white"
    }
});

export default Home;
