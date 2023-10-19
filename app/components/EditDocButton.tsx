"use client";
import React, { useContext, useState } from "react";
import DeleteButton from "./DeleteButton";
import { DocContext } from "./DocContext";

const EditDoc = ({ docs }) => {
  const { dataValues, setDataValues } = useContext(DocContext);
  const [activeButton, setActiveButton] = useState(null);

  const handleEditDoc = (id) => {
    const findDoc = docs.find((doc) => doc.product_id === id);
    if (findDoc) {
      setDataValues(findDoc);
      setActiveButton(id);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {docs.map((doc) => (
        <div
          key={doc.product_id}
          className=" h-10 border-2 rounded flex gap-2 items-center justify-between px-4"
          style={{
            backgroundColor:
              activeButton === doc.product_id ? "darkgray" : "gray",
          }}
        >
          <button className=" text-xl text-neutral-300" onClick={() => handleEditDoc(doc.product_id)}>
            {doc.product_name}
          </button>
          <DeleteButton docId={doc.product_id} />
        </div>
      ))}
    </div>
  );
};

export default EditDoc;
