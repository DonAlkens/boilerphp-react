import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = ({ description, setDescription }) => {
  return (
    <CKEditor
      data={description}
      editor={ClassicEditor}
      onReady={(editor) => {}}
      onChange={(event, editor) => {
        const data = editor.getData();
        setDescription(data)
      }}
      onBlur={(event, editor) => {
        // console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        // console.log("Focus.", editor);
      }}
    />
  );
};

export default TextEditor;
