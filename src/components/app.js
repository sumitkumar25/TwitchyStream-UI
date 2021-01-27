import React from "react";

import { Router, Route } from 'react-router-dom';
import StreamCreate from "./streams/streamcreate";
import StreamDelete from "./streams/streamdelete";
import StreamEdit from "./streams/streamedit";
import StreamList from "./streams/streamlist";
import StreamShow from "./streams/streamshow";
import Header from "./layout/header";
import history from "./../history";
class App extends React.Component {
    render() {
        return <div className="ui container">

            <Router history={history}>
                <Header></Header>
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" exact component={StreamCreate}></Route>
                <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
                <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
                <Route path="/streams/show" exact component={StreamShow}></Route>
            </Router>
        </div>
    }
}

export default App;