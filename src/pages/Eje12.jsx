import CardSimple from '../components/CardSimple'

const Eje010 = () => {
  return (
    <div>
      <h1>Ejercicio 012</h1>
      <p>El siguiente div tiene un fondo color rojo, y un ancho y alto de 240px</p>
      <p>Añadele la foto /src/assets/fondo1.jpg como fondo. Usa la extensión de tailwind para hacerlo</p>
      <p>Haz que el modo de fusión entre el fondo rojo y la foto sea de tipo overlay</p>
      <p>También haz que la frase cebem, aparezca en el centro con un tamaño 3xl</p>
      <p>Pista: https://tailwindcss.com/docs/background-image#customizing-your-theme</p>
      <p>Pista: https://tailwindcss.com/docs/background-blend-mode</p>

      <div className=' bg-red-300 w-60 h-60 bg-cover'>
        CEBEM
      </div>
    </div>
  )
}

export default Eje010