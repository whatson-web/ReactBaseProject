import React, {Component} from 'react';
import FormSearch from './FormSearch';
import { SubmissionError } from 'redux-form';

class Search extends Component {

    constructor(props) {

        super(props);

        this.submit = this.submit.bind(this);

    }

    submit(data) {

        return this.props.search(data).catch((error) => {

            throw new SubmissionError(error);

        });

    }


    render() {
        return (
            <div style={{margin : '0 0 20px 0'}}>
                <FormSearch onSubmit={this.submit} />
            </div>

        )
    }
}

export default Search;
