import CardSimple from '../components/CardSimple'

const Eje010 = () => {
  return (
    <div>
      <h1>Ejercicio 013</h1>
      <p>Añade tailwind al input para:</p>
      <p>El color del texto será blue-200</p>
      <p>El color del fondo será un gradiente de color indigo-500 (el gradiente irá hacia la izquierda)</p>
      <p>Ponle borde redondeado (tamaño lg)</p>
      <p>Añadele un padding de 0.5rem (8px)</p>
      <p>Añade un anillo con box-shadow</p>
      <p>El color del texto del placeholder será verde (green-200) con una opacidad del 50%</p>
      <p>Pista: https://tailwindcss.com/docs/ring-width</p>
      <p>Pista: https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text</p>

      <div className="m-4 flex gap-8"  >
        <img className='animate-spin' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='animate-bounce' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='animate-pulse' src="/src/assets/react.png" alt="react" width="100"/>
      </div>
    </div>
  )
}

export default Eje010
