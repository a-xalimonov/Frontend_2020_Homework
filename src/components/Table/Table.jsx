import React from 'react';
import './Table.css';
import TableLine from '../Table-line/Table-line'

class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            json: {},
        }
    }

    componentDidMount() {
        const apiKey = 'fca_live_wRm3RWt1tgEYqTdDM6NJTxZA81J8OOL7YIOkXsZr'
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=USD%2CEUR%2CGBP%2CCNY%2CJPY&base_currency=RUB`)
            .then(response => response.json())
            .then(result => this.setState({
                isLoaded: true,
                json: result,
            }));
    }

    render() {
        const isLoaded = this.state.isLoaded;
        if (!isLoaded)
            return (<></>)
        else {
            const values = this.state.json.data
            return (
                <table className="Table">
                    <tbody>
                        <TableLine currencyId="USD" rubCost={values.USD} currencyName="ДОЛЛАР США" />
                        <TableLine currencyId="EUR" rubCost={values.EUR} currencyName="ЕВРО" />
                        <TableLine currencyId="GBP" rubCost={values.GBP} currencyName="ФУНТ СТЕРЛИНГОВ" />
                        <TableLine currencyId="CNY" rubCost={values.CNY} currencyName="КИТАЙСКИЙ ЮАНЬ" />
                        <TableLine currencyId="JPY" rubCost={values.JPY} currencyName="ЯПОНСКАЯ ИЕНА" />
                    </tbody>
                </table>
            );
        }
    }
}

export default Table