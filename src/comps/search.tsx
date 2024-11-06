import Auto from "./auto"
export default function Search() {
    return (
        <div className="buscador">
        <h1>TITULO</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Auto></Auto>
          <button className='searchButton'>Buscar</button>
        </div>
  
        <div className='popular'>
            <button className='recomend'>Lorem, ipsum.</button>
            <button className='recomend'>Lorem, ipsum.</button>
            <button className='recomend'>Lorem, ipsum.</button>
            <button className='recomend'>Lorem, ipsum.</button>
            <button className='recomend'>Lorem, ipsum.</button>
            <button className='recomend'>Lorem, ipsum.</button>
  
        </div>
      </div>
    )
}