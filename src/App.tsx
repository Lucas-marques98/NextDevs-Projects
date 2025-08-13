import {Users2} from 'lucide-react'
import UserItem from './components/userItem';

import { useEffect,useState } from 'react';
import { UserItemProps } from './types/user';

function App (){

  const [users,setUsers] = useState<UserItemProps[]>([])

  useEffect(() => {
    const getUsers = async () => {
      try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error)
      }
    }

    getUsers
  }, [])
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