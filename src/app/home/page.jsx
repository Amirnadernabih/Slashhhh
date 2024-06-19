// C:\Users\win 10\slashhh\src\app\home\page.jsx

import React from 'react';
import Link from 'next/link';

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <>
      <div className="container">
        <div className="row">
          {posts.map((item) => (
            <div key={item.id} className="blogbox col-md-4 mb-4">
              <Link href={`/post/${item.id}`}>
         
                  <h5 className="blogtitle">{item.title}</h5>
                  <p className="blogbody">{item.body}</p>
             
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
