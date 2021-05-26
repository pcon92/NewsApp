import React, {useEffect, useState} from 'react';
import {ScrollView,StyleSheet,View,Text,RefreshControl} from 'react-native';

import Article from '../components/Article';
import {API_KEY} from '@env';
import colors from '../config/colors';


const Home = ({navigation, article, setArticle}) => {

    const [refreshing, setRefreshing] = useState(false);

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

    const onRefresh = async () => {
        setRefreshing(true);
        setArticle("Loading Articles");
        await getArticles();
        setRefreshing(false);
    }

    // make call to API on page load
    useEffect(() => {
        getArticles();
    }, []);

    // display alternate view if unable to get data from API
    if (!article) {
        return (
            <View style={styles.homeContainer}>
                <Text style={styles.homeTitle}>Latest News from NewsAPI</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.loadingArticles}>No articles found...check API key or connection</Text>
                </View>
            </View>
        )
    }

    // alternate view while refreshing
    if (article === "Loading Articles") {
        return (
            <View style={styles.homeContainer}>
                <Text style={
                    styles.homeTitle
                }>Latest News from NewsAPI</Text>
                <View style={styles.textContainer}>
                <Text style={styles.loadingArticles}>Loading Articles...</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={
            styles.homeContainer
        }
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }

        >
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
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    homeTitle: {
        fontSize: 24,
        backgroundColor: colors.primaryColor,
        padding: 10,
        color: colors.white
    },
    loadingArticles: {
        fontSize: 24
    }
});

export default Home;
