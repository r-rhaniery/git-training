import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import annotation from "../annotation";



function App (){
  return (
    <div>
      <Header />
      {annotation.map(annotationItem =>
        <Note
          key={annotationItem.id}
          title={annotationItem.title}
          content={annotationItem.content}
        />
      )}
      <Footer />
    </div>
  );
  }
  
export default App;


// function createNote(annotation) {
//   return (
//     <Note 
//       key = {annotation.id}
//       title = {annotation.title}
//       content = {annotation.content}
//     />
//   );
// }

// function App (){
//     return (
//     <div>
//         <Header />
//         {annotation.map(createNote)}
//         <Footer />
//     </div>
//     );
//   }