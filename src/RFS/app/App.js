import React from 'react';
import { render } from 'react-dom';
import {FilterableProductTable} from './components/Products';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './components/ToDo/reducers'
import App from './components/ToDo/presentation/App'

var PRODUCTS = [
    {category: 'Sporting Goods', price: '£49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '£9.99', stocked: true, name: 'Cricket ball'},
    {category: 'Sporting Goods', price: '£29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '£99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '£399.99', stocked: true, name: 'iPhone 5'},
    {category: 'Electronics', price: '£199.99', stocked: true, name: 'Nexus 7'}
];

let store = createStore(todoApp)
 
render((
    <table>
        <tbody>
            <tr>
                <td><FilterableProductTable products={PRODUCTS} /></td>
                <td>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </td>
            </tr>
        </tbody>
    </table>
), document.getElementById('root'))