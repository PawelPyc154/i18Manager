import { createContext, ReactNode, useContext, useState } from 'react'

interface Language {
  name: string
  translation: Record<string, any>
}

const Context = createContext<{ languages: Language[]; mainLanguage: string } | null>(null)

interface StateContextProps {
  children: ReactNode
}
const StateContext = ({ children }: StateContextProps) => {
  const [languages] = useState<Language[]>([
    {
      name: 'en',
      translation: { yes: 'Yes', no: 'No', form: { name: 'Name', partner: 'Partner' } },
    },
  ])

  const [mainLanguage] = useState('en')
  return <Context.Provider value={{ languages, mainLanguage }}>{children}</Context.Provider>
}

export default StateContext

export const useLanguage = () => {
  const context = useContext(Context)
  if (!context) {
    // return console.log('test')
    throw new Error('Context is not inside provider')
  }

  return context
}
