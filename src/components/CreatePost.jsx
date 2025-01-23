export function CreatePost() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img src="https://placehold.co/30x30" alt="Icon of a document" className="mr-2"/>
                    <h2 className="text-lg font-semibold">Crie um novo post</h2>
                </div>
                <button className="text-blue-500">
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <form>
                <div className="mb-4">
                    <input type="text" placeholder="Digite o seu nome" className="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Digite o título para o seu post" className="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div className="mb-4">
                    <textarea placeholder="Escreva o seu conteudo aqui..." className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Enviar</button>
            </form>
        </div>)
}