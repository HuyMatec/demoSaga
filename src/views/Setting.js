import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const Setting = () => {
  const darkMode = useSelector(state => state.appReducer.darkMode);
  const isLoading = useSelector(state => state.appReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Isloading', isLoading);
  }, [isLoading]);

  const viewStyle = {
    backgroundColor: darkMode ? 'black' : 'white',
  };
  const buttonStyle = {
    borderColor: darkMode ? 'white' : 'black',
  };
  const textStyle = {
    color: darkMode ? 'white' : 'black',
  };

  return (
    <SafeAreaView style={{flex: 1, ...viewStyle}}>
      <View>
        <Text style={{...textStyle}}>Setting</Text>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            dispatch({type: 'CHANGE_APP_MODE', payload: {darkMode: !darkMode}})
          }
          value={darkMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
