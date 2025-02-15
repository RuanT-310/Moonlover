import { useState } from 'react'
import { useForm } from "react-hook-form"
import { PostFirst } from './PostFirst';
import { PostSecond } from './PostSecod';


export const CreatePostModal = ({ isOpen, onClose: closeModal, addPost }) => {

  const { handleSubmit, reset, trigger, control } = useForm()
  const [formManager, formManagerState] = useState(0)
  
  /*->*/if (!isOpen) return null;
    function onClose() {
        reset()
        closeModal()
        handleStepChange(0)
    }
  function submitFormPost(data) {
    delete data.name
    console.log(data, "data")
    addPost(data)
    onClose()
  }
  const handleStepChange = async (step) => {
    // Valida os campos do passo atual antes de avançar/voltar
    const isValid = await trigger(); // Aciona a validação de todos os campos
    console.log(isValid)
    if (isValid) {
      formManagerState(step); // Muda o passo apenas se a validação for bem-sucedida
    }
  };

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg ">
    <div className="bg-white w-full max-w-md rounded-md shadow-lg p-6">
      {/* Cabeçalho do Modal */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-lg font-semibold">Crie um novo post</h2>
        <button
          className="text-red-400 hover:text-red-600 cursor-pointer"
          onClick={onClose}
          children="X"
        />
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit(submitFormPost)}>
        {/* Botão de Envio */}
        {
            formManager == 0 
            ? <PostFirst control={control}/>
            : <PostSecond control={control}/>
        }
        <div className="text-right relative">
        {formManager == 0 ? 
            <button
                type="button"
                onClick={()=>handleStepChange(1)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                children={"Proximo"}
            />
            : <>
                <button
                type="button"
                onClick={()=>handleStepChange(0)}
                className="bg-blue-500 text-white px-4 py-2 absolute left-0 rounded-md hover:bg-blue-600"
                children={"Voltar"}
              />
                <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                children={"Enviar"}
              />
            </>
        }
        </div>
      </form>
    </div>
  </div>
  );
  };