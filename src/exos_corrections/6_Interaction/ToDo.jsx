import style from './ToDo.module.css';

export const Todo = (props) => {
    const { todo, onDelete, onToggleComplete } = props;
    const { id, name, description, priority, complete } = todo;

    return (

        <div className={style.todo}>
            <div className={style.top}>

                <input readOnly type="checkbox" checked={complete} onClick={() => onToggleComplete(id)}/>
                <div className={style.title}>
                    {name}
                    
                    {
                        (priority === 'high' && !complete) &&
                        <div className={style.pulse}>Urgent</div>
                    }
                </div>

                

                <span className={style.plus}>👇🏻</span>
                <span className={style.delete} onClick={() => { onDelete(id) }}>🗑️</span>

            </div>

            <div className={style.bot}>
                {description}
            </div>
        </div>

        /* div.todo
            div.top
                input type="checkbox"
                div.title
                div.pulse Urgent (si urgent uniquement)
                
                span.plus 👇🏻 (si description uniquement)
                span.delete 🗑️

            div.bot 
        */
    )
}