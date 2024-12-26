import React, { useState } from "react";
import DynamicForm from "./components/Form/DynamicForm";
import "./App.css"; // For split-screen styles

const App = () => {
  const [schema, setSchema] = useState({
    name: { type: "text", label: "Name", props: { required: true } },
    age: { type: "number", label: "Age", props: { required: false } },
  });

  const handleSchemaChange = (e) => {
    try {
      const newSchema = JSON.parse(e.target.value);
      setSchema(newSchema);
    } catch {
      console.error("Invalid schema JSON");
    }
  };

  return (
    <div className="split-screen">
      {/* Left Panel: Schema Editor */}
      <div className="editor">
        <h2>Schema Editor</h2>
        <textarea
          value={JSON.stringify(schema, null, 2)}
          onChange={handleSchemaChange}
          rows={20}
          style={{ width: "100%", fontFamily: "monospace" }}
        />
      </div>

      {/* Right Panel: Dynamic Form */}
      <div className="preview">
        <h2>Form Preview</h2>
        <DynamicForm schema={schema} onSubmit={(data) => console.log(data)} />
      </div>
    </div>
  );
};

export default App;
