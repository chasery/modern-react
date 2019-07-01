import React from 'react';

class SearchBar extends React.Component {
    state = { term: '', placeHolderText: 'Search Images' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input
                            placeholder={this.state.placeHolderText} 
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;