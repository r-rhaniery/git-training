import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import Footer from "./Footer";
import emojipedia from "../emojipedia";
import "/public/styles.css";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.description}
    />
  );
}

function App(props) {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
