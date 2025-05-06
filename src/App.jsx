
import { Children, useState } from 'react'
import './App.css'


const TURNS ={ 
  x : 'x',
  o : 'o'
} 

const Square = ({children,isSelected, updateBoard, index })=>{
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleclick= ()=>{
    updateBoard()

  }


  return(
    <div  onClick={handleclick} className = {className}> 
      {children}
    </div>
  )

}
function App() {


  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn ] = useState(TURNS.x)

 const updateBoard  = ()=>{
  const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
  setTurn(newTurn)

 }

  return (
    <main className='board'>
      <h1>Juego Tres Rayas</h1><br />

      <section className='game'>
        {
          board.map(( _,index) => {

            return(

              <Square 
              key={index}
              index={index}
              updateBoard ={updateBoard}
              > 
            {board[index]}

            </Square>


            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected ={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected ={turn === TURNS.o}>{TURNS.o}</Square>

      </section>
    </main>
  )
}

export default App
