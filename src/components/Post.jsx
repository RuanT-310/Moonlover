
export function Post({title, text}) {
    return (
        <article>
            <h2>{title}</h2>
            <p className="post-text">{text}</p>
        </article>
    )
}