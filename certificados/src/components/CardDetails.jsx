import React from 'react';
import certificados from '../data/data';


class CardDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            certificado: [],
            loading: true,
        }
        this.saveData = this.saveData.bind(this);
    }

    componentDidMount() {
        // this.fetchCertificados();
        this.saveData();
    }

    saveData() {
        const { match: { params: { id } } } = this.props;
        const currentCertificado = certificados.filter(certificado => certificado.id === parseInt(id));
        this.setState({
            certificado: currentCertificado,
            loading: false,
        })
    }
    render() {
        const { loading } = this.state;
        if (loading) {
            return <h1>Loading...</h1>
        }
        const { certificado } = this.state;
        const { id, name, username, expiration, updated_at, created_at, expirated_at } = certificado[0];
        return (
            <div className="grid-cardDetails">
                <div className="cardDetails-certificado">
                    <div className="cardDetails-cabecalho">
                        <h3>{`Id: ${id}`}</h3>
                        <h3>{`Nome: ${name}`}</h3>
                    </div>
                    <h3>{` Nome de Usuario: ${username}`}</h3>
                    <h3>{`Periodo do Certificado: ${expiration} dias`}</h3>
                    <h3>{`Certificado atualizado em :${updated_at[8]}${updated_at[9]}-${updated_at[5]}${updated_at[6]}-${updated_at[2]}${updated_at[3]}`}</h3>
                    <h3>{`Certificado criado em : ${created_at[8]}${created_at[9]}-${created_at[5]}${created_at[6]}-${created_at[2]}${created_at[3]}`}</h3>
                    <h3>{`Certificado expira em : ${expirated_at[8]}${expirated_at[9]}-${expirated_at[5]}${expirated_at[6]}-${expirated_at[2]}${expirated_at[3]}`}</h3>
                </div>
            </div>
        );
    }
}
export default CardDetails;


