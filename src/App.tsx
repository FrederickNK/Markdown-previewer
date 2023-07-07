import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import MarkdownGuide from "./Components/MarkdownGuide";
import MarkdownInput from "./Components/MarkdownInput";
import MarkdownOutput from "./Components/MarkdownOutput";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: any) => {
    setMarkdown(event.target.value);
  };

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <MarkdownInput value={markdown} onChange={handleChange} />
      <MarkdownOutput markdown={markdown} />
    </>
  );
}

export default App;
