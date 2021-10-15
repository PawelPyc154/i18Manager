import tw from 'twin.macro'
import { useLanguage } from './components/StateContext'

const App = () => {
  const { languages, mainLanguage } = useLanguage()

  const mainTranslation =
    languages.find((language) => language.name === mainLanguage)?.translation || {}
  return (
    <div tw="bg-gray-700 p-10 font-semibold">
      <TransObj obj={mainTranslation} />
    </div>
  )
}

export default App
interface TransObjProps {
  obj: Record<string, any>
  keyPath?: string[]
}
const TransObj = ({ obj, keyPath = [] }: TransObjProps) => {
  const { languages, addProperty } = useLanguage()
  return (
    <div>
      <span tw="text-yellow-400">{'{'}</span>
      {Object.entries(obj).map(([key, value]) => (
        <div tw="gap-2 flex">
          <span tw="text-pink-500"> -</span> <div tw="text-red-600">{key}:</div>
          <div css={[typeof value === 'string' ? tw`flex` : tw``]}>
            {typeof value === 'string' ? (
              <div tw="flex gap-10">
                {languages.map((language) => (
                  <div tw="text-green-600 w-96 flex overflow-wrap[anywhere]">
                    <span tw="text-blue-500 mx-2 flex-shrink-0">{language.name}-</span>

                    <div>
                      {
                        [...keyPath, key].reduce(
                          (prev, curr) => prev[curr],
                          language.translation,
                        ) as any
                      }
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <TransObj obj={value} keyPath={[...keyPath, key]} />
            )}
          </div>
        </div>
      ))}
      <button type="button" tw="text-yellow-400" onClick={() => addProperty(keyPath)}>
        {'} + '}
      </button>
    </div>
  )
}
