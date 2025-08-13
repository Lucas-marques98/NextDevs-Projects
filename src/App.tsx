import { useState } from "react";
import { Button } from "./components/ui/button"

/**
 * Componente principal da aplicação que demonstra gerenciamento de estado e manipulação de eventos.
 * @component
 * @returns {JSX.Element} O componente App renderizado
 */

/**
 * @state message - Variável de estado para armazenar e atualizar o texto exibido
 * @function setMessage - Função atualizadora de estado para modificar o valor da mensagem
 */

/**
 * Altera o estado da mensagem quando o botão é clicado
 * @function alterarMensagem
 * @returns {void}
 */

/**
 * Renderiza um container centralizado com:
 * - Um título exibindo a mensagem atual
 * - Um botão que aciona a mudança de mensagem quando clicado
 * Usa classes do Tailwind CSS para estilização e layout
 */

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
