import React from "react";
import parse from "html-react-parser";
interface Document {
  product_id: number;
  product_name: string;
  text_field: string;
  text_color: string;
  bg_color: string;
  date: string;
}

interface DocumentAPI {
  products: Document[];
}

const PreviewPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/doctext`, {
    cache: "no-store",
  });
  const data: DocumentAPI = await res.json();
  const docData = data.products;
  console.log(docData);

  const formater = docData.map((doc) => (
    <div className="flex flex-col justify-center" key={doc.product_id}>
      <p className="text-xl text-black font-bold">{doc.product_name}</p>
      <div>{parse(doc.text_field)}</div>
    </div>
  ));

  return <div className="flex flex-col justify-center">{formater}</div>;
};

export default PreviewPage;
