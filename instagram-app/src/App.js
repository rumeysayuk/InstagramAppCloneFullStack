import React, {useEffect} from 'react';
import Posts from "./components/Posts/Posts";
import {getAllPosts} from "./actions/posts";
import {useDispatch} from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Container} from "@material-ui/core";
import Auth from "./components/Auth/Auth";
import PostAdd from "./components/Posts/post-add/Post-add";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);
    return (
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <Navbar/>
                    <Switch>
                        <Route path={"/"}  exact component={Posts}/>
                        <Route path={"/auth"}   component={Auth}/>
                        <Route path={"/postadd"} component={PostAdd}/>
                    </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
