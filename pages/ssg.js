
 // Import React for the page component.
 import React from "react";

 // Fetch data at build time.
 export async function getStaticProps() {
   // Request post number 1 from the API.
   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
 
   // Convert the API response into a JavaScript object.
   const post = await res.json();
 
   // Pass the post to the page as props.
   return { props: { post } };
 }
 
 // Create the static page and receive the post.
 function SSGPage({ post }) {
   // Return the content that visitors will see.
   return (
     // Create the main page container.
     <div>
       {/* Display the page heading. */}
       <h1>Static Site Generated Post</h1>
       {/* Display the post title. */}
       <h2>{post.title}</h2>
       {/* Display the post body. */}
       <p>{post.body}</p>
     </div>
   );
 }
 
 // Export the page component.
 export default SSGPage;
 