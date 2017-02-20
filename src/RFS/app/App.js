﻿import React from 'react'
import { render } from 'react-dom'
import {FilterableProductTable} from './components/Products'
import ItemList from './components/ItemList'
import { Provider } from 'react-redux';
import configureStore from './components/store/configureStore';

var PRODUCTS = [
    {category: 'Sporting Goods', price: '£49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '£9.99', stocked: true, name: 'Cricket ball'},
    {category: 'Sporting Goods', price: '£29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '£99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '£399.99', stocked: true, name: 'iPhone 5'},
    {category: 'Electronics', price: '£199.99', stocked: true, name: 'Nexus 7'}
];

const store = configureStore();

render((
    <table>
        <tbody>
            <tr>
                <td><FilterableProductTable products={PRODUCTS} /></td>
                <td>
                    <Provider store={store}>
                        <ItemList />
                    </Provider>
                </td>
            </tr>
        </tbody>
    </table>
), document.getElementById('root'))