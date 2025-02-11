import { Post } from "../components/Post"

import ImgDec from "../assets/img-effect.png"
import React, { useState } from "react";
import { CreatePost } from "../components/CreatePost";
import { CreatePostModal } from "../components/CreatePostModal";
import { usePosts } from "../context/postsContext";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function Blog() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { posts, addPost } = usePosts(); 
    if (!posts) {
      return <div>Carregando...</div>; // Exibe algo enquanto os posts não estão disponíveis
    }
  
    return (<>
        <NavBar/>

        <div className="container">
            <main>
                { posts.map(
                    ({autor, title, text, posText}, index) => <Post autor={autor} title={title} text={text} posText={posText} key={index}></Post>
                )}
            </main>
            <CreatePost modalControler={() => setIsModalOpen(true)}/>
        </div>
        <Footer/>
    </>)
}
