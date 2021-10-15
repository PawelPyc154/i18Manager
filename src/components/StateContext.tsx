import { createContext, ReactNode, useContext, useState } from 'react'

interface Language {
  name: string
  translation: Record<string, any>
}
// eslint-disable-next-line no-unused-vars

const Context = createContext<{
  languages: Language[]
  mainLanguage: string
  // eslint-disable-next-line no-unused-vars
  addProperty: (path: string[]) => void
  removeProperty: () => void
} | null>(null)

interface StateContextProps {
  children: ReactNode
}
const StateContext = ({ children }: StateContextProps) => {
  const [languages, setLanguage] = useState<Language[]>([
    {
      name: 'en',
      translation: {
        yes: 'Yes',
        no: 'No',
        form: { name: 'Name', partner: 'Partnerhhhhhhhhhhhhhhhhhhhhhhhhfgh gfh fgh gf' },
      },
    },
    {
      name: 'pl',
      translation: {
        yes: 'Tak',
        no: 'Nie',
        form: { name: 'Nazwa', partner: 'Partneryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' },
      },
    },
  ])

  const addProperty = (path: string[]) => {
    setLanguage((prev) =>
      prev.map((language) => ({
        ...language,
        translation: {
          ...language.translation,
          ...[...path, 'test']
            .reverse()
            .reduce((prev2, curr, index) => ({ [curr]: !index ? 'test' : prev2 }), {}),
        },
      })),
    )
    console.log({ test: { test: '' } }.test)

    console.log(
      [...path, 'test']
        .reverse()
        .reduce((prev2, curr, index) => ({ [curr]: !index ? 'test' : prev2 }), {}),
    )
  }

  const removeProperty = () => {
    console.log('addProperty')
  }

  const [mainLanguage] = useState('en')
  return (
    <Context.Provider value={{ languages, mainLanguage, addProperty, removeProperty }}>
      {children}
    </Context.Provider>
  )
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
