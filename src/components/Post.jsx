
export function Post({name, title, text}) {
    return (
        <article>
            <div className="post-author">
                <div className="post-author-name">{name}</div>
            </div>
            <h2>{title}</h2>
            <p className="post-text">{text}</p>
        </article>
    )
}