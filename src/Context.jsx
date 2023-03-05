import { createContext, useState } from "react";
import { useEffect } from "react";

const Context = createContext(null);

function Provider({ children }) {
    const BASE_URL = "https://api.npoint.io/259dd18e1698198203b3"

    const [users, setUsers] = useState([]);
    const [session, setSession] = useState(null);

    const [canchas, setCanchas] = useState(null);

    useEffect(() => {
        fetch({BASE_URL})
          .then((response) => response.json())
          .then((data) => setCanchas(data));
      }, []);


    const state = {
        users,
        setUsers,
        session,
        setSession,
        canchas,
        setCanchas
    };
    return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };