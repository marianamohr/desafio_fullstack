import React from 'react';
import certificados from '../data/data';
import Card from './Card';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          certificados: [],
        }
        this.saveData = this.saveData.bind(this);
      }

      componentDidMount() {
        // this.fetchCertificados();
        this.saveData();
      }
    
      saveData() {
        this.setState({ certificados: certificados })
      }
    render() {
        const { certificados } = this.state;
        return (
            <main>
                <h1>Certificados Disponíveis</h1>
                <div className="list-certificados">
                    {
                        certificados.map((certificado) => {
                           return <Card certificado={certificado}/>
                        })
                    }
                </div>
            </main>
        );
    }
}
export default Content;