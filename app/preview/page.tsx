import React from 'react'

async function PreviewPage () {


    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/doctext`, {
        cache: "no-store",
      });
      const data: DocumentAPI = await res.json();
      const docData = data.products;



  return (
    <div>PreviewPage</div>
  )
}

export default PreviewPage