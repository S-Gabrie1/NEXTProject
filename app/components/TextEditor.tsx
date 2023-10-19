"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useRef } from "react";
import BundledEditor from "../BundledEditor";
import { DocContext } from "./DocContext";

export default function TextEditor() {
  const router = useRouter();
  const { dataValues, setDataValues } = useContext(DocContext);

  const editorRef = useRef(null);

  const saveDocument =  () => {
    let fontRef = editorRef.current.selection.getNode().style.color.toString()
    let bgRef = editorRef.current.selection.getNode().style.backgroundColor.toString()
    let textRef = editorRef.current.getContent();

    setDataValues( (prevState) => {
      const updatedDataValues = {
        ...prevState,
        text_field: textRef,
      };

      try {
        const options = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...updatedDataValues,
            text_color: fontRef,
            bg_color: bgRef,
            date: "",
          }),
        };
        const req =  fetch("http://localhost:3000/api/doctext", options);
        return req
      } catch (error) {
        console.log(error);
      }
    });
    router.refresh();
  };

  return (
    <>
      <BundledEditor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={
          dataValues.text_field !== undefined
            ? dataValues.text_field
            : "Text Saved !"
        }
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "anchor",
            "autolink",
            "help",
            "image",
            "link",
            "lists",
            "searchreplace",
            "table",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor backcolor fontsize" +
            "removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        className=" border-2 bg-inherit bg-slate-700 text-white p-2 mt-2"
        onClick={saveDocument}
      >
        Save Text
      </button>
    </>
  );
}
