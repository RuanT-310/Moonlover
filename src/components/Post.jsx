import Userimage from '../assets/icone.png'

export function Post({autor, title, text, posText}) {
    return (
        <article>
            <div className="post-author">
                <img alt="Icone Autor" src={Userimage} />
                <div className="post-author-name">{autor.name}</div>
            </div>
            <h2>{title}</h2>
            <p className="post-text">{text}</p>
            <p className="post-text">{posText}</p>
        </article>
    )
}