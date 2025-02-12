import React, { createContext, useContext, useEffect, useState } from 'react';
import { SupabasePostRepository } from '../providers/supabasePostRepository';

const postRepository = new SupabasePostRepository()

// Criar o contexto
const PostsContext = createContext();

// Provedor de contexto para envolver os componentes e fornecer os dados
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(); // Estado para armazenar os posts

  // Função para adicionar um novo post
  
  useEffect(() => {
    (async () => {
      const posts = await postRepository.findAll();
      setPosts(posts);
      } )()
  }, [])
      
  const addPost = async (newPost) => {
    await postRepository.create(newPost)
    const posts = await postRepository.findAll(); 
    setPosts(posts);
  };


  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const usePosts = () => useContext(PostsContext);