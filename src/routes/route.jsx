import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// Screens
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import HowItWorks from "../pages/HowItWorks";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/features" element={<Features/>}/>
      <Route path="/how-it-works" element={<HowItWorks/>}/>
    </Route>
  )
);
