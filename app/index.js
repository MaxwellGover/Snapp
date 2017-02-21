/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { AppContainer } from '~/containers'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'
import devTools from 'remote-redux-devtools'

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    devTools()
  )
)

export default function Snapp () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

AppRegistry.registerComponent('Snapp', () => Snapp);