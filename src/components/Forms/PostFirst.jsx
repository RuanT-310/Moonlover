import { Input } from './Input';
import { TextArea } from './TextArea';


export const PostFirst = ({ control }) => {

  
  return <>
    <div className="mb-4">
        <Input
            rules={{required: true, minLength: 3, maxLength: 20}}
            type="text"
            name="title"
            control={control}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            placeholder="Digite o título para o seu post"
        />
        </div>
        {/* Campo Conteúdo */}
        <div className="mb-4">
          <TextArea
            rules={{required: true, minLength: 3 }}
            rows="3"
            name="text"
            control={control}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            placeholder="Escreva o seu conteúdo aqui..."
          />
        </div>
    </>  
};