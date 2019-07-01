import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <Link className="ui button" to="/" >Cancel</Link>
                <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Confirm you want to delete the stream.'
        }

        return `Confirm you want to delete the stream ${this.props.stream.title}.`
    }

    render() {
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);