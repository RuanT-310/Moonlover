import { useForm } from "react-hook-form"
import { Input } from './Input';
import { TextArea } from './TextArea';


export const PostSecond = ({ control}) => {

  
  return <>
    <div className="mb-4">
        <Input
            rules={{required: true, minLength: 3, maxLength: 20}}
            type="text"
            name="name"
            control={control}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            placeholder="Digite seu nome aqui para o seu post"
        />
        </div>
    </>  
};