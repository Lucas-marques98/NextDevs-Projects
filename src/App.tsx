import {Users2} from 'lucide-react'
import UserItem from './components/userItem';

function App (){
  return(
    <div className="flex flex-col">
      <div className="flex items-center justify-center space-x-3 py-12"></div>
      <h1 className="text-2xl font-bold">Lista de usuarios</h1>
      <Users2 className="size-6 text-blue-500"/>

      <UserItem/>
    </div>
  )
}

export default App;