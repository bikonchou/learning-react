import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Headers from "./components/Headers";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: 'Red Color',
    value: 'red'
  },
  {
    label: 'Blue Color',
    value: 'blue'
  },
  {
    label: 'Green Color',
    value: 'green'
  }
]

export default () => {
  return (
    <div>
      <Headers />
      <Route path="/"><Accordion items={items} /></Route>
      <Route path="/list"><Search /></Route>
      <Route path="/dropdown">
        <Dropdown />
      </Route>
      <Route path="/translate"><Translate /></Route>
    </div>
  );
};
