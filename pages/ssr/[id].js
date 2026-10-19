
 // Import React for the page component.
 import React from "react";

 // Fetch the required post on the server for each request.
 export async function getServerSideProps(context) {
   // Read the dynamic ID from the URL.
   const { id } = context.params;
 
   // Request the post whose ID matches the URL.
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
 
   // Convert the response into a JavaScript object.
   const post = await res.json();
 
   // Handle an ID for which the API has no post.
   if (!res.ok || !post.id) {
     // Tell Next.js to display its 404 page.
     return { notFound: true };
   }
 
   // Pass the fetched post to the page component.
   return { props: { post } };
 }
 
 // Create the page component and receive the post data.
 function SSRPage({ post }) {
   // Return the post details to display in the browser.
   return (
     // Main container for the post.
     <div>
       {/* Display the page heading. */}
       <h1>Server-Side Rendered Post</h1>
       {/* Display the post ID. */}
       <p>Post ID: {post.id}</p>
       {/* Display the post title. */}
       <h2>{post.title}</h2>
       {/* Display the post body. */}
       <p>{post.body}</p>
     </div>
   );
 }
 
 // Export the page for Next.js routing.
 export default SSRPage;
 