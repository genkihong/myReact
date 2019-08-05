import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    // 1. 用 bind 方式
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };
  // 傳送表單
  onFormSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.term);
  };
  // 2. 用箭頭函式
  onInputChange = (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    this.setState({
      term: value
    });
  };
  // 搜尋按鈕
  onSearchClick = () => {
    this.props.handleClick(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* 3. 事件處理直接用箭頭函式
          onSubmit={(e) => this.onFormSubmit(e)}> */}            
          <div className="field">
            <label>Image Search</label>
            <input
              type ="text"
              value ={this.state.term}
              // 注意 onInputChange 不加括號，否則會自動執行
              onChange={this.onInputChange}
              // 3. 事件處理直接用箭頭函式
              // onChange={(e) => this.setState({ term: e.target.value })}
              />
          </div>
          <div style={{ display: 'flex'}}>
            <button style = {button} onClick={this.onSearchClick}>
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const button = {
  marginLeft: 'auto',
  marginTop: '10px'
};

export default SearchBar;