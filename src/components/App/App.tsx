import React, {lazy, Suspense} from 'react';
import {
    BrowserRouter,
    createBrowserRouter,
    HashRouter,
    Outlet,
    Route,
    RouterProvider,
    Routes,
    useRoutes
} from "react-router-dom";

const LazyLoad = (Comp: any) => {
    return (
        <Suspense fallback={<div>loading....</div>}>
            <Comp/>
        </Suspense>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: LazyLoad(lazy(() => import("./Test"))),
    },
    {
        path: "/showcase",
        element: LazyLoad(lazy(() => import("./Test2"))),
    },
]);

class App extends React.Component {
    render() {
        return (
            <RouterProvider router={router}/>
        );
    }
}

export default App;
