import ButtonGradient from './assets/svg/ButtonGradient.jsx'
import Button from './components/Button.jsx'

const App = () =>  {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Button className='mt-10' href='#login'>
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
