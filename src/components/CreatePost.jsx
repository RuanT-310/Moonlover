import { useState } from 'react'
export const CreatePost = ({ isOpen, onClose, addPost }) => {
    if (!isOpen) return null;
    const inicialValue = {
        name: "",
        posText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet veniam cupiditate nulla perspiciatis sed esse itaque",
        title: '',
        text: ''
      }
    const [formData, setFormData] = useState(inicialValue);
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Acessa os dados como um objeto
        const {name, ...data} = formData
        // Adicionando o novo post ao contexto
        addPost({
            autor: {
                name,
                img: ""
            },
            ...data
        });
        // Limpar o formulário após o envio
        setFormData(inicialValue)
        onClose()
    };
    
     return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg ">
        <div className="bg-white w-full max-w-md rounded-md shadow-lg p-6">
          {/* Cabeçalho do Modal */}
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-semibold">Crie um novo post</h2>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              ×
            </button>
          </div>
  
          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            {/* Campo Nome */}
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                placeholder="Digite o seu nome"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {/* Campo Título */}
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                placeholder="Digite o título para o seu post"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            {/* Campo Conteúdo */}
            <div className="mb-4">
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                placeholder="Escreva o seu conteúdo aqui..."
                id="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
              />
            </div>
            {/* Botão de Envio */}
            <div className="text-right">
              <button
                type="submit"
                onClick={handleSubmit}
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