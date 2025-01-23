import { Post } from "../components/Post"
import { postsProviders } from "../providers/apiProvier"
import ImgDec from "../assets/img-effect.png"
import React, { useState } from "react";
import { CreatePost } from "../components/CreatePost";

export function Blog() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (<>
    {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                        {/* Botão para fechar o modal */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-blue-500"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        
                        {/* Componente CreatePost */}
                        <CreatePost />
                    </div>
                </div>
            )}
        <header>
            <div className="header-logo">Web<span>Blog</span></div>
            <div className="header-rights">powered by WebII</div>
            <button>Criar post</button>
        </header>

        <div className="container">
            <main>
                { postsProviders().map(
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
                 onClick={openModal}
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
