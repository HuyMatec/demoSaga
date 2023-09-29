import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './modal';
import {SafeAreaView} from 'react-native-safe-area-context';


const Home = () => {
  const darkMode = useSelector(state => state.appReducer.darkMode);
  const comments = useSelector(state => state.commentsReducer.comments);
  const isLoading  = useSelector(state => state.commentsReducer.isLoading);
  const dispatch = useDispatch();
  const viewStyle = {
    backgroundColor: darkMode ? 'black' : 'white',
  };
  const buttonStyle = {
    borderColor: darkMode ? 'white' : 'black',
  };
  const textStyle = {
    color: darkMode ? 'white' : 'black',
  };

  return isLoading:(Boolean) ? (
    <Loading />
  ) : (
    <SafeAreaView style={{flex: 1, ...viewStyle}}>
      <View style={{flex: 1}}>
        <Text style={{...textStyle}}>Login</Text>
        <TouchableOpacity onPress={() => dispatch({type: 'GET_COMMENTS'})}>
          <Text style={{width: '100%', backgroundColor: '#FFF'}}>GetData</Text>
        </TouchableOpacity>
        <Text style={{...textStyle}} numberOfLines={0}>
          {JSON.stringify(comments)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
