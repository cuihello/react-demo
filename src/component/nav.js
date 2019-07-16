import React from 'react'
import {HashRouter as Router,Route,NavLink,Switch} from "react-router-dom";
import {store} from "../store/store";

export class People extends React.Component{
    render(){
        return(<div>
                <ul>
                    <li>{store.getData.name}</li>
                    <li>{store.getData.age}</li>
                    <li>{store.getData.sex}</li>
                    <li>{store.getData.lev}</li>
                </ul>
            </div>

        )
    }
}