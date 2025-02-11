import { useState } from 'react'
import { useForm } from "react-hook-form"
import { Input } from './Input';
import { TextArea } from './TextAreaForm';


export const CreatePostModal = ({ isOpen, onClose, addPost }) => {

  const { handleSubmit, control, reset } = useForm()
  
  /*->*/if (!isOpen) return null;

  function submitFormPost(data) {
    console.log(data)
    addPost(data)
    reset()
    onClose()
  } 

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
        {/* Campo Nome */}
          <Input
            rules={{required: true, minLength: 3, maxLength: 20, pattern: /^[a-z A-Z]+$/}}
            className="mb-4 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            type="text"
            name="name"
            control={control}
            placeholder="Digite o seu nome"
          />
        {/* Campo Título */}
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
        {/* Botão de Envio */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
  );
  };