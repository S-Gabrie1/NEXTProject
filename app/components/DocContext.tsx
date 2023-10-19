"use client";
import { createContext, useEffect, useState } from "react";

export const DocContext = createContext({
  dataValues: {},
  setDataValues: (values: Doc) => {},
  inputValues: {},
  setInputValues: (values: Document) => {},
});

interface Document {
  product_name: string;
  text_field: string;
  text_color: string;
  bg_color: string;
}

interface Doc extends Document {
  product_id: number | null;
  date: string;
}

export const DocProvider = ({ children }) => {
  const [dataValues, setDataValues] = useState<Doc>({
    product_id: null,
    product_name: "",
    text_field: "",
    text_color: "",
    bg_color: "",
    date: "",
  });

  const [inputValues, setInputValues] = useState<Document>({
    product_name: "",
    text_field: "This is some new text...",
    text_color: "black",
    bg_color: "white",
  });

  return (
    <DocContext.Provider
      value={{ inputValues, setInputValues, dataValues, setDataValues }}
    >
      {children}
    </DocContext.Provider>
  );
};
