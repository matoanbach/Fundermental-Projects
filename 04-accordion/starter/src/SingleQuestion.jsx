import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQuestion({id, title, info, activeId, toggleQuestion}) {
    const isActive = activeId === id;
  return (
    <article className="question">
        <header>
            <h5>{title}</h5>
            <button className="question-btn" onClick={() => toggleQuestion(id)}>{isActive ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </header>
        {isActive && <p>{info}</p> }
    </article>
  );
}

export default SingleQuestion