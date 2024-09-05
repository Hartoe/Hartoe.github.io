import '../styles/HoverImage.css';

export default function HoverImage({ src, hover, alt }) {

    return (
        <div class="hover-image">
            <img class="hover-image__image" src={src} alt={alt}/>
            <div class="hover-image__overlay">
                {hover}
            </div>
        </div>
    );
}