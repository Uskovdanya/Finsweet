import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostProvider, usePosts } from "./components/contexts/PostContext";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";

import PrivacyPolice from "./pages/PrivacyPolice";
import BlogPostPage from "./pages/BlogPostPage";
import Author from "./pages/AuthorPage";
import AuthorPage from "./pages/AuthorPage";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  //function handleAddPost(post) {
  //  setPosts((posts) => [post, ...posts]);
  //}

  return (
    <>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="privacy" element={<PrivacyPolice />} />
            <Route
              path="post/:id"
              element={<BlogPostPage replace to="index" />}
            />
            <Route
              path="author/:author"
              replace
              to="index"
              element={<AuthorPage />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </>
  );
}

export default App;
