import './App.css';
import Header from "./components/Header"
import Section from "./components/Section"
import Icon1 from "./images/icon1.png"
import Icon2 from "./images/icon2.png"
import Icon3 from "./images/icon3.png"
import Icon4 from "./images/icon4.png"


const noticia1 = {
    imatgeUrl:Icon1, 
    titol: "Declarative",
    contingut: "React makes it painless to create interactive UIs."
}

const noticia2 = {
    imatgeUrl:Icon2, 
    titol: "Components",
    contingut: "Build encapsulated components that manage theis state."
}

const noticia3 = {
    imatgeUrl:Icon3, 
    titol: "Single-Way",
    contingut: "A set of immutable values are passed to the component's"
}

const noticia4 = {
    imatgeUrl:Icon4, 
    titol: "JSX",
    contingut: "Statically-typed, designed to run on modern browsers."
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className='seccion'>
        <Section noticia={noticia1} />
        <Section noticia={noticia2}/>
        <Section noticia={noticia3}/>
        <Section noticia={noticia4}/> 
      </div>
    </div>

  );
}

export default App;
