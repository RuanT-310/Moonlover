import { createClient } from '@supabase/supabase-js';

export class SupabasePostRepository {
  constructor() {
    this.supabase = createClient(
      'https://jxkhxnbgtneegoomsxtg.supabase.co', 
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4a2h4bmJndG5lZWdvb21zeHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyOTg4NjIsImV4cCI6MjA1NDg3NDg2Mn0.UQGIobaiEqXCjjE4L7-_pcMHskT5NwqdqdEH7c0BiGA'
    );
    console.log(this.supabase)
  }

  // Criação de post
  async create(post) {
    const { data, error } = await this.supabase
      .from('posts')  // Nome da tabela no Supabase
      .insert([post]);
    if (error) throw new Error(error.message);
    return data;  // Retorna o post criado com o ID gerado automaticamente
  }

  // Buscar post por ID
  async findById(id) {
    const { data, error } = await this.supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();  // Retorna apenas um resultado

    if (error) throw new Error(error.message);
    return data;
  }

  // Buscar todos os posts
  async findAll() {
    const { data, error } = await this.supabase
      .from('posts')
      .select(`*`);
    console.log(data, this.supabase)
    if (error) throw new Error(error.message);
    return data;
  }

  // Atualizar post
  async update(id, updatedPost) {
    const { title, content } = updatedPost;
    const { data, error } = await this.supabase
      .from('posts')
      .update({ title, content })
      .eq('id', id);

    if (error) throw new Error(error.message);
    return data[0];  // Retorna o post atualizado
  }

  // Deletar post
  async delete(id) {
    const { error } = await this.supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) throw new Error(error.message);
    return true;  // Confirma que o post foi deletado
  }
}

