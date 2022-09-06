import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "HTML is a markup-based language, where we mark up elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language composed of layers, created for the purpose of stylizing HTML pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a structured, high-level scripting interpreted programming language with weak dynamic typing and multi-paradigm."
);

hoverChangeDescription(
  ".react",
  "ReactJS is an open source JavaScript library focused on creating user interfaces on web pages."
);

hoverChangeDescription(
  ".sass",
  "Sass (css preprocessor) is a stylesheet language. It is a simple scripting language used in Sass files."
);

