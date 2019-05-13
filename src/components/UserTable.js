import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table';

const UserTable = (props) => (
    <div>
        <BootstrapTable data={props.data} trClassName = {props.onRowSelect} hover>
            <TableHeaderColumn width='7%' isKey dataField='first_name'>
                First Name
                    </TableHeaderColumn>
            <TableHeaderColumn width='8%' dataField='last_name'>
                Last Name
                    </TableHeaderColumn>
            <TableHeaderColumn width='17%' dataField='company_name'>
                Company Name
                    </TableHeaderColumn>
            <TableHeaderColumn width='12%' dataField='city'>
                City
                    </TableHeaderColumn>
            <TableHeaderColumn width='5%' dataField='state'>
                State
                    </TableHeaderColumn>
            <TableHeaderColumn width='5%' dataField='zip'>
                Zip
                    </TableHeaderColumn>
            <TableHeaderColumn width='20%' dataField='email'>
                Email
                    </TableHeaderColumn>
            <TableHeaderColumn width='23%' dataField='web'>
                Web
                    </TableHeaderColumn>
            <TableHeaderColumn width='3%' dataField='age'>
                Age
                    </TableHeaderColumn>
        </BootstrapTable>
    </div>
);

export default UserTable;