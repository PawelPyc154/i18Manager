import { useLanguage } from './components/StateContext'

const App = () => {
  const { languages, mainLanguage } = useLanguage()

  const mainTranslation =
    languages.find((language) => language.name === mainLanguage)?.translation || {}
  return (
    <div tw="bg-gray-200">
      {Object.keys(mainTranslation).map((key) => (
        <div>{key}</div>
      ))}
    </div>
  )
}

export default App
