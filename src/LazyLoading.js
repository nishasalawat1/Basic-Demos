import React, {lazy,Suspense} from 'react';
// import Home from './Home';
// import LayLoadingAbout from './LazyLoadingAbout.js';


const Home = lazy(()=>import('./Home.js'))
const About = lazy(()=>import('./LazyLoadingAbout.js'))

function LazyLoading(props) {
    return (
        <div>
            This is main conponent
            <Suspense fallback={<div>Please wait.....Home loading..</div>}>
            <Home />
            </Suspense>
            <Suspense fallback={<div>Please wait.....About loading..</div>}>
            <About />
            </Suspense>
        </div>
    );
}

export default LazyLoading;