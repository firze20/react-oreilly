import StarRating from "./components/StarRating"

function App() {

  return (
    <>
      <h1>Star Rating Component</h1>
      {/* we can pass a style to it */}
      <StarRating style={{backgroundColor: 'lightgrey'}} onDoubleClick={e => alert("double click")} />
    </>
  )
}

export default App
