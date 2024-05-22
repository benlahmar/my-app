import * as React from "react";
import ThemesList from "./ThemesList";
import QuizContext from "./QuizContext";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: ThemesList
    
  },
  {
    path: "quiz",
    Component:QuizContext,
  },
]);
export default router;