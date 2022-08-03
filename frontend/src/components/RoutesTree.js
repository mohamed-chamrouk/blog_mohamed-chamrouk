import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";


import Layout from './Layout.js'
import Home from './blog/BlogPosts'
import NewPost from './blog/editing/NewPost'
import Post from './post/Post.js'
import Portfolio from './portfolio/Portfolio.js';
import RouteNotFound from './RouteNotFound.js';
import About from './about/About.js'

export const App = () => {
    const location = useLocation()

    return (
        <Layout>
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:id" element={<Post />} />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="*" element={<RouteNotFound/>}/>
                        <Route path="/post/new" element={<NewPost/>}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    )
}

const RoutesTree = () => <BrowserRouter><App /></BrowserRouter>

export default RoutesTree