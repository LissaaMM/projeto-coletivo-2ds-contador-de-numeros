import Counter from "./components/Counter"
import Button from "./components/Button"
import Title from "./components/Title"

export default function App() {
  return (
    <div className="container">
      <Title>
        <span>Valor do Contador</span>
      </Title>
      <Counter/>
      <Button nameIncrement={'Incrementar'}/>
      <Button nameDecrement={'Decrementar'}/>
      <Button nameReset={'Resetar'}/>
    </div>
  )
}
