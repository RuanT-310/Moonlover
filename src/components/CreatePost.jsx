import React, { useState } from "react"
import ImgDec from "../assets/img-effect.png"
import { CreatePostModal } from "./Forms/PostForm"
import { usePosts } from "../context/postsContext"

export const CreatePost = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addPost } = usePosts(); 
    return <>
        <CreatePostModal
            isOpen={ isModalOpen}
            addPost={ addPost }
            onClose={() => setIsModalOpen(false)}
        />
        <aside>
            <h1 className="aside-title">
                Tem algum assunto pra compartilhar?
            </h1>
            <div className="aside-subtitle">
                Crie agora um post e compartilhe com o seu conteúdo.
            </div>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white p-2 rounded"
            >Criar post</button>
            <img alt="Imagem de decoração" src={ImgDec} />
        </aside>
    </>
}