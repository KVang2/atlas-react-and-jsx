import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      <Header/>
      <Section title="What is react?">
        <p>
        React is a JavaScript library use for building user interfaces.
        React is used to develop single-page web, mobile or to server-rendered applications.
        React applications often rely on libraries for routing because its focus is with user interface and rendering components to the DOM.
        It's code is made of components that are reusable, in which when rednering a component, values are passed between components through prop.
        </p>
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Reusable Components</li>
          <li>Rendering with Virtual DOM</li>
          <li>Stable code structure</li>
          <li>SEO-friendly websites</li>
          <li>Cross-Platform Development</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
