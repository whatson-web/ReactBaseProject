import React, {Component} from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


class WHTable extends Component {

    constructor(props) {

        super(props);

    }

    filterMethod (filter, row, column)  {

        const id = filter.pivotId || filter.id; 

        if(row[id] === undefined || !row[id] ) return true; 
        if(filter.value === undefined || !filter.value ) return true; 

        const value = String(row[id].toLowerCase()); 
        const search = String(filter.value.toLowerCase()); 

        if(value.indexOf(search) > -1) return true; 

        return false; 

    }


    render() {

        const {data, pages, loading, columns, filterable} = this.props;

        return(
            <ReactTable
                manual
                defaultFilterMethod={this.filterMethod}
                data={data}
                pages={pages}
                loading={loading} 
                columns={columns}
                filterable={filterable}
                onFetchData={this.props.onFetchData}
                className="-striped -highlight"
            />
        )

    }


}

export default WHTable; 
