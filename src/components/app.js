import React from "react";

import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from "./streams/streamcreate";
import StreamDelete from "./streams/streamdelete";
import StreamEdit from "./streams/streamedit";
import StreamList from "./streams/streamlist";
import StreamShow from "./streams/streamshow";
import Header from "./layout/header";
class App extends React.Component {
    render() {
        return <div className="ui container">

            <BrowserRouter>
                <Header></Header>
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" exact component={StreamCreate}></Route>
                <Route path="/streams/edit" exact component={StreamEdit}></Route>
                <Route path="/streams/delete" exact component={StreamDelete}></Route>
                <Route path="/streams/show" exact component={StreamShow}></Route>
            </BrowserRouter>
        </div>
    }
}

export default App;