
 // Import React so we can write a React component.
 import React from "react";

 // This function runs on the server for every page request.
 export async function getServerSideProps() {
   // Request a random joke from the joke API.
   const res = await fetch("https://official-joke-api.appspot.com/random_joke");
 
   // Convert the API response into a JavaScript object.
   const joke = await res.json();
 
   // Send the joke data to the page as props.
   return { props: { joke } };
 }
 
 // Create the page component and receive the joke as a prop.
 function BasicSSRPage({ joke }) {
   // Return the HTML-like JSX that React will render.
   return (
     // Create the main container for the page.
     <div>
       {/* Display the page heading. */}
       <h1>Basic SSR Example</h1>
       {/* Display the setup or first part of the joke. */}
       <p>{joke.setup}</p>
       {/* Display the punchline in bold text. */}
       <p><strong>{joke.punchline}</strong></p>
     </div>
   );
 }
 
 // Export the component so Next.js can use it as a page.
 export default BasicSSRPage;
 