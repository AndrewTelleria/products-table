import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockOnlyChange(e) {
    this.props.onInStockOnlyChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange} />
        <p>
          <input
            type="checkbox"
            value={this.props.inStockOnly}
            onChange={this.handleInStockOnlyChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
