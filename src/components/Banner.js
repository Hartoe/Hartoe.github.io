import '../styles/Banner.css';

export default function Banner({src, title, sub}) {
    return (
        <div className='banner' style={{ backgroundImage: `url(${src})` }}>
            {title ? <h1 className='banner__title'>{title}</h1> : <></>}
            {sub ? <h4 className='banner__sub'>{sub}</h4> : <></>}
        </div>
    );
}