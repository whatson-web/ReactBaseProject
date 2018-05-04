import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';


class Paginate extends React.Component {

    constructor(props) {

        super(props);

        this.changePage = this.changePage.bind(this);


    }


    changePage(el) {

        this.props.onChangePage(el);

    }


    render() {

        if(!this.props.paginate) {

            return (<div></div>);

        }else{

            let pages = [];
            let i = 1;
            let max = 5;

            if(this.props.paginate.page > 5) i = this.props.paginate.page;
            if(this.props.paginate.pages_count > 5) max = this.props.paginate.page + 5;

            for (let i = i; i < max; i++) {

                pages.push(i);

            }


            return (

                <div className="row">

                    <div className="col-6">
                        <Pagination>
                            <PaginationItem disabled={(this.props.paginate['hydra:view'] && this.props.paginate['hydra:view']['hydra:before']) ? false : true}><PaginationLink previous onClick={() => this.changePage(this.props.paginate['hydra:view']['hydra:before'])}>Prec</PaginationLink></PaginationItem>

                            {pages.map((el, index) => (
                                <PaginationItem key={index} active={(this.props.paginate.page == el) ? true : false}>
                                    <PaginationLink onClick={() => this.changePage(el)}>{el}</PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem disabled={(this.props.paginate['hydra:view'] && this.props.paginate['hydra:view']['hydra:next']) ? false : true}><PaginationLink next onClick={() => this.changePage(this.props.paginate['hydra:view']['hydra:next'])}>Suiv</PaginationLink></PaginationItem>
                        </Pagination>
                    </div>

                    <div className="col-6 text-right">

                        <strong>{this.props.paginate['hydra:totalItems']}</strong> resultats

                    </div>

                </div>


            );
        }

    }
}

module.exports = Paginate;
