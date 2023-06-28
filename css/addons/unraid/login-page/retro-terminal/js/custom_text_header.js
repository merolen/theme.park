
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                        __  ___      __                     __             __         
   /  |/  /_  __/ /__  ________  ____  / /__________ _/ /__  ____ 
  / /|_/ / / / / / _ \\/ ___/ _ \\/ __ \\/ __/ ___/ __ `/ / _ \\/ __ \\
 / /  / / /_/ / /  __(__  )  __/ / / / /_/ /  / /_/ / /  __/ / / /
/_/  /_/\\__,_/_/\\___/____/\\___/_/ /_/\\__/_/   \\__,_/_/\\___/_/ /_/ 
                                                                  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
