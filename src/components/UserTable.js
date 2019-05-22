import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { setUserData } from '../actions/actions';

class UserTable extends React.Component {
    constructor(props){
        super(props);
        this.selectHandler = this.selectHandler.bind(this);
    }

    selectHandler(row, isSelect, e) {
        e.preventDefault();
        if(isSelect) { 
        this.props.history.push(`/user/${row.id}`);
        this.props.dispatch(setUserData(row));
        }
    }

    render() {
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: this.selectHandler
        }
        return ( 
            <div className='container'>
                <BootstrapTable data={this.props.data} selectRow={selectRow} hover>
                    <TableHeaderColumn width='8%' isKey dataField='first_name' dataSort={true}>
                        First Name
                            </TableHeaderColumn>
                    <TableHeaderColumn width='8%' dataField='last_name' dataSort={true}>
                        Last Name
                            </TableHeaderColumn>
                    <TableHeaderColumn width='15%' dataField='company_name' dataSort={true}>
                        Company Name
                            </TableHeaderColumn>
                    <TableHeaderColumn width='11%' dataField='city' dataSort={true}>
                        City
                            </TableHeaderColumn>
                    <TableHeaderColumn width='5%' dataField='state' dataSort={true}>
                        State
                            </TableHeaderColumn>
                    <TableHeaderColumn width='5%' dataField='zip' dataSort={true}>
                        Zip
                            </TableHeaderColumn>
                    <TableHeaderColumn width='20%' dataField='email' dataSort={true}>
                        Email
                            </TableHeaderColumn>
                    <TableHeaderColumn width='23%' dataField='web' dataSort={true}>
                        Web
                            </TableHeaderColumn>
                    <TableHeaderColumn width='5%' dataField='age' dataSort={true}>
                        Age
                            </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default connect()(withRouter(UserTable));