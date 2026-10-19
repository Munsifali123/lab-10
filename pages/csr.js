
 // Import React and the hooks required for CSR.
 import React, { useEffect, useState } from "react";

 // Create the client-side rendering page.
 function CSRPage() {
   // Store the post; null means the data has not loaded yet.
   const [post, setPost] = useState(null);
 
   // Run this effect after the component renders in the browser.
   useEffect(() => {
     // Request post number 1 from the API.
     fetch("https://jsonplaceholder.typicode.com/posts/1")
       // Convert the response into a JavaScript object.
       .then((res) => res.json())
       // Save the received post in the component's state.
       .then((data) => setPost(data))
       // Log an error if the request fails.
       .catch((error) => console.error("Error fetching post:", error));
   // Use an empty dependency array to run the effect once after mounting.
   }, []);
 
   // Display a loading message while post is still null.
   if (!post) return <p>Loading...</p>;
 
   // Display the post after its data has loaded.
   return (
     // Create the main container for the post.
     <div>
       {/* Display the page heading. */}
       <h1>Client-Side Rendered Post</h1>
       {/* Display the post title. */}
       <h2>{post.title}</h2>
       {/* Display the post body. */}
       <p>{post.body}</p>
     </div>
   );
 }
 
 // Export the page so Next.js can display it.
 export default CSRPage;
 