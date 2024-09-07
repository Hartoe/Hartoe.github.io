import "../styles/Work.css";

export default function Work({title, job, desc}) {
    return (
        <div className='work'>
            <h3 className='work__title'>{title}</h3>
            <p className='work__job'>{job}</p>
            <p className='work__desc'>{desc}</p>
        </div>
    );
}