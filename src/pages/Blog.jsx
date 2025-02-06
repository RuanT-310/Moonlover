import { Post } from "../components/Post"

import ImgDec from "../assets/img-effect.png"
import React, { useState } from "react";
import { CreatePost } from "../components/CreatePost";
import { usePosts } from "../context/postsContext";

export function Blog() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { posts, addPost } = usePosts(); // Acesso ao contexto
    // Verificar se posts é um array válido
    if (!posts) {
      return <div>Carregando...</div>; // Exibe algo enquanto os posts não estão disponíveis
    }
  
    return (<>
        <CreatePost
            isOpen={isModalOpen}
            addPost={ addPost }
            onClose={() => setIsModalOpen(false)}
        />
        <header>
            <div className="header-logo">Web<span>Blog</span></div>
            <div className="header-rights">powered by WebII</div>
            <button>Criar post</button>
        </header>

        <div className="container">
            <main>
                { posts.map(
                    ({autor, title, text, posText}, index) => <Post autor={autor} title={title} text={text} posText={posText} key={index}></Post>
                )}
            </main>
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
        </div>
        <footer>
            <div className="header-logo">Web<span>Blog</span></div>
            <div className="footer-text">powered by WebII</div>
        </footer>
    </>)
}
