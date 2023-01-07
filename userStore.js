import { createContainer } from "unstated-next";
import {useState} from 'react';

function useUserStore () {
    const [user, setUser] = useState(null); 
    return {user, setUser}; 
}
export const UserStore = createContainer(useUserStore)