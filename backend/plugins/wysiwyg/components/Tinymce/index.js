import React from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";
const TinyEditor = ({ onChange, name, value }) => {
    return (
        <Editor
            apiKey="gbkna2thgti0l4bwxllklvw9ghupvfex4cf89dp7ix2dfiwt"
            value={value}
            tagName={name}
            onEditorChange={(editorContent) => {
            onChange({ target: { name, value: editorContent } });
            }}
            outputFormat="text"
            init={{}}
        />
    );
};
TinyEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
};
export default TinyEditor;