import { useState } from "react";
import { Button } from "./components/ui/button"

const App = () => {
  const [message,setMessage] = useState("Olá mundo")

  function alterarMensagem() {
    setMessage("Fui clicado")
  }
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-2">
      <h2>{message}</h2>
      <Button onClick={() => alterarMensagem()}>
        Alterar mensagem
      </Button>
    </div>
  )
}

export default App;
