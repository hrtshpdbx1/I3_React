import { useForm } from "react-hook-form";
import style from "./Exo5.module.css";
import { useState } from "react";

export const Exo5 = () => {

    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const {register, handleSubmit, formState : { errors }} = useForm({
        defaultValues : {
            nb1 : '',
            nb2 : '',
            operator : '+'
        },
        mode : 'onChange'
    });

    const calculate = (data) => {
        resetResult();

        const {nb1, nb2, operator} = data;

        switch(operator) {
            case '+' :
                // setResult( +nb1 + +nb2 );
                setResult( parseFloat(nb1) + parseFloat(nb2) );
                break;
            case '-' :
                setResult(nb1 - nb2);
                break;
            case '*' : 
                setResult(nb1 * nb2);
                break;
            case '/' : 
                if(+nb2 === 0){
                    setError('Division par 0 impossible !');
                }
                else {
                    setResult(nb1 / nb2);
                }
                break;
            default : 
                console.log('Oula une erreur est survenue');                
                break;
        }
    }

    const resetResult = () => {
        setResult('');
        setError('');
    }

    return (
        <div>
            <h2>La Calculatrice Temu : </h2>
            <form onSubmit={handleSubmit(calculate, resetResult)}
             className={`flex gap-1 items-center ${style.form}`}>
                <input aria-label="nombre 1" type="text" {...register('nb1', { required : true, pattern : /^[-]?[\d]+[.]?[\d]*$/ })} />

                <select aria-label="opérateur" name="" id="" {...register('operator')}>
                    <option value="+">➕</option>
                    <option value="-">➖</option>
                    <option value="*">✖️</option>
                    <option value="/">➗</option>
                </select>

                <input aria-label="nombre 2" type="text" {...register('nb2', { required : true, pattern : /^[-]?[\d]+[.]?[\d]*$/ })}/>

                <button>🟰</button>

                <input aria-label="résultat" type="text" value={result} readOnly />

                {
                    ( errors['nb1']?.type === 'required' || errors['nb2']?.type === 'required' ) &&
                    <span>Veuillez entrer des nombres</span>
                }
                {
                    ( errors['nb1']?.type === 'pattern') && 
                    <span>Vous n'avez pas entré un nombre valide pour le premier nombre</span>
                }
                {
                    ( errors['nb2']?.type === 'pattern') && 
                    <span>Vous n'avez pas entré un nombre valide pour le deuxième nombre</span>
                }
                {
                    error && 
                    <span>{error}</span>
                }

            </form>
        </div>
    )
}