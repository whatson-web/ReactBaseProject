import React from 'react';
import * as mediaService from '../../../services/media';
import { connect } from 'react-redux';
import ApiConfig from '../../../constants/ApiConfig';
import Loading from '../../Loading';
import { SubmissionError } from 'redux-form';

class File extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            data            : {},
            loaded          : true
        }

        this.submit     = this.submit.bind(this);


    }


    submit(data) {

        this.setState({loaded : false});

        return mediaService.putFile(data).then((data) => {

            console.log(data); 
            

        }).catch((error) => {

            throw new SubmissionError(error);

        });


    }


    /**
     * Sortie vue
     * @returns {XML}
     */
    render() {

        return (
            <div>
                {!this.state.loaded && <Loading />}
                
                <FormFile onSubmit={this.submit} />    

            </div>

        );
    }
}

export default File;

