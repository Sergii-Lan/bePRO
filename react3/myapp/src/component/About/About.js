/** * Created by Сергей on 19.10.2016. */import React from 'react';import List from '../List/List';const user = [    {id: 0, name : 'Anton'},    {id: 1, name : 'Andrey'}];const dogs = [    {id: 0, name : 'Recs'},    {id: 1, name : 'Billy'},    {id: 2, name : 'jonhy'},    {id: 3, name : 'Pit'},    {id: 4, name : 'Elvis'},    {id: 5, name : 'Jack'}];class Main extends React.Component {    render () {        return (            <div>                <h1>About us</h1>                <List users={user} />                <List users={dogs} />            </div>        )    }}export default Main;