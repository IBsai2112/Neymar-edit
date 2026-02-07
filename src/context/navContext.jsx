import React from 'react'

const navContext = ({children}) => {

    const navBarContext = createContext()
    const [navOpen, setNavOpen] = useState(false)

  return (
    <div>
        <navBarContext.Provider value={{navOpen, setNavOpen}}>
        {children}
        </navBarContext.Provider>
    </div>
  )
}

export default navContext