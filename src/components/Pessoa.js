import styles from './a.module.css'
import PropsType from 'prop-types'

function Pessoa( {name, picture, age, profession} ){
    return (
        <div className={styles.changebackground}>
            <h1>Nome: {name}</h1>
            <img src= {picture} alt= {name}></img>
            <p>Idade: {age}</p>
            <p>Profissao: {profession}</p>
        </div>
    );
}

Pessoa.propTypes= {
    name: PropsType.string,
    age: PropsType.number,
}

Pessoa.defaultProps = {
    name: "nome não definido",
    age: 0,
}



export default Pessoa