import Greeting from "./components/greeting"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
 

  return (
    <>
    <NavBar/>
    <ItemListContainer Greeting />
    <Greeting message={"televisor"}/>
    <Greeting message={"PC"}/>
 
    </>
  )
}

export default App
