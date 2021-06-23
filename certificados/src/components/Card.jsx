import React from 'react';
import {Link} from 'react-router-dom';

class Card extends React.Component {
    render() {
        const { certificado: {id, name } } = this.props;

        return (
            <div className="card-certificado">
                <div className="cabecalho">
                    <h3>{`Id: ${id}`}</h3>
                    <h3>{`Nome: ${name}`}</h3>
                    <Link to={ `/certificado/${id}` } className="link">Mais Detalhes</Link>
                </div>
              
              
            </div>
        );
    }
}
export default Card;
