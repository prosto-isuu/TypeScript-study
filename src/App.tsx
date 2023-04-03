import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    // const users:IUser[] = [// - В данном случии лучше указать что users имеет тип IUser
    //     {
    //         "id": 1,
    //         "name": "Айбек уулу Ардак",
    //         "email": "Sincere@april.biz",
    //         "address": {
    //             "street": "Kulas Light",
    //             "city": "Gwenborough",
    //             "zipcode": "92998-3874",
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "name": "Кылым Кастарбекова",
    //         "email": "Sincere@april.biz",
    //         "address": {
    //             "street": "Kulas Light",
    //             "city": "Gwenborough",
    //             "zipcode": "92998-3874",
    //         }
    //     }
    // ]

     // а в данном случии мы типизируем
    // useState - или просто хук и передаем в качестве generic IUser

    // const onCallAlert = (number:number) => {
    //     console.log('Alert сработал!!!', number)
    // }

    // Метод toString() - наследуется для всех
    // типов данных такие как string или number у него нету параметров но возвращает строку
    return (
            <BrowserRouter>
                <NavLink to='/todos'>Список дел</NavLink>
                <NavLink to='/users'>Пользователи</NavLink>
                <Routes>
                        <Route path={'/users'} element={<UserPage/>}/>
                        <Route path={'/todos'} element={<TodoPage/>}/>
                        <Route path={'/users/:id'} element={<UserItemPage/>}/>
                        <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default App;