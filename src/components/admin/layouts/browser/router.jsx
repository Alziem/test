import React, { lazy,Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Spinner from '../spinner/spinner';

const Sellers = lazy(() => import("../../sellers/sellers.jsx"));

const Settings = lazy(() => import("../../settings/settings"));

/** 
 * This Router For Dashboard
 */

 const Dashboard = lazy(() => import("../../seller/dashboard/dashboard.jsx"));

/**
 * This Route For Product
 */

const Products = lazy(() => import("../../seller/products/product"));

const AddProduct = lazy(() => import("../../seller/products/addProduct"));

const EditProduct = lazy(() => import("../../seller/products/editProduct"));

// const ViewProduct = lazy(() => import("../../products/viewProduct"));


/**
 * This Route For Carousel
 */

const Carousels = lazy(() => import("../../seller/carousels/carousels"));

const Addcarousel = lazy(() => import("../../seller/carousels/addCarousel"));

const Editcarousel = lazy(() => import("../../seller/carousels/editCarousel"));

// const Viewcarousel = lazy(() => import("../../carousels/viewCarousel"));

/**
 * This Route For Meetings
 */

const Meeting = lazy(() => import("../../seller/meetings/meetings"));



/**
 * This Route For Posts
 */

const Posts = lazy(() => import("../../seller/posts/posts"));

const Addpost = lazy(() => import("../../seller/posts/addPost"));

const Editpost = lazy(() => import("../../seller/posts/editPost"));

/**
 * This Route For Tags
 */

const Tags = lazy(() => import("../../seller/tags/tags"));

const Addtag = lazy(() => import("../../seller/tags/addTag"));

const Edittag = lazy(() => import("../../seller/tags/editTag"));

/**
 * This Route For Messsages
 */

const Messages = lazy(() => import("../../messages/messages"));


/**
 * This Route For Orders
 */

const Orders = lazy(() => import("../../seller/orders/orders"));

/**
 * This Route For Negotiate
 */

const Negotiate = lazy(() => import("../../seller/negotiate/negotiate"));

const Router = () => {
  return (
    <Suspense fallback={<Spinner />}>
    <Switch>

    <Route exact path="/dashboard/setting" component={Settings} />

      <Route exact path="/dashboard" component={Sellers} />

      {/***** Dashboard Router ****/}

      <Route exact path="/dashboard/seller/:slug" component={Dashboard} />

      {/***** Product Router *****/}

      <Route exact path="/dashboard/product" component={Products} />

      <Route exact path="/dashboard/product/create" component={AddProduct} />

      <Route
        exact
        path="/dashboard/product/:slug/edit"
        component={EditProduct}
      />

      <Route
        exact
        path="/dashboard/product/:slug"
        component={EditProduct}
      />

      {/***** Carousel Router *****/}

      <Route exact path="/dashboard/carousel" component={Carousels} />

      <Route exact path="/dashboard/carousel/create" component={Addcarousel} />

      <Route
        exact
        path="/dashboard/carousel/:slug/edit"
        component={Editcarousel}
      />

        <Route
        exact
        path="/dashboard/carousel/:slug"
        component={Editcarousel}
/>

      {/***** Meeting Router *****/}

      <Route exact path="/dashboard/meeting" component={Meeting} />


      {/***** Posts Router *****/}

      <Route exact path="/dashboard/post" component={Posts} />

      <Route exact path="/dashboard/post/create" component={Addpost} />

      <Route exact path="/dashboard/post/:slug/edit" component={Editpost} />

      <Route exact path="/dashboard/post/:slug" component={Editpost} />

      {/***** Tags Router *****/}

      <Route exact path="/dashboard/tag" component={Tags} />

      <Route exact path="/dashboard/tag/create" component={Addtag} />

      <Route exact path="/dashboard/tag/:slug/edit" component={Edittag} />

      <Route exact path="/dashboard/tag/:slug" component={Edittag} />

      {/***** Messages Router *****/}

      <Route exact path="/dashboard/message" component={Messages} />

      {/***** Order Router *****/}

      <Route exact path="/dashboard/order" component={Orders} />

      {/***** Negotiate Router *****/}

      <Route exact path="/dashboard/negotiate" component={Negotiate} />

      <Redirect to="/dashboard" />
    </Switch>
    </Suspense>
  );
};

export default Router;
