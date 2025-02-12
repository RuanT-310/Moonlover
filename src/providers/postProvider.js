
export class PostInMemoryRepository {
    posts = [];
    nextId = 1;
  
    async create(post) {
      return new Promise((resolve) => {
        const newPost = { id: this.nextId++, ...post };
        this.posts.push(newPost);
        resolve(newPost);
      });
    }
  
    async findById(id) {
      return new Promise((resolve) => {
        const post = this.posts.find(p => p.id === id);
        resolve(post || null);
      });
    }
  
    async findAll() {
      return new Promise((resolve) => {
        resolve([...this.posts]);
      });
    }
  
    async update(id, updatedPost) {
      return new Promise((resolve) => {
        const index = this.posts.findIndex(p => p.id === id);
        if (index === -1) return resolve(null);
        
        this.posts[index] = { ...this.posts[index], ...updatedPost };
        resolve(this.posts[index]);
      });
    }
  
    async delete(id) {
      return new Promise((resolve) => {
        const index = this.posts.findIndex(p => p.id === id);
        if (index === -1) return resolve(false);
        
        this.posts.splice(index, 1);
        resolve(true);
      });
    }
  }
  
  