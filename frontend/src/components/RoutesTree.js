import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";


import Layout from './Layout.js'
import Home from './blog/BlogPosts'
import Post from './post/Post.js'

const App = () => {
    const location = useLocation()

    return (
        <Layout>
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:id" element={<Post />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    )
}

const RoutesTree = () => <BrowserRouter><App /></BrowserRouter>

export default RoutesTree