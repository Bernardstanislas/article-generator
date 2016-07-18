import React from 'react';
import ReactDOM from 'react-dom';
import {Converter} from 'showdown';

const converter = new Converter();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '# Type your markdown here !'
    }
  }
  onTextareaChange({target: {value: markdown}}) {
    this.setState({markdown});
  }

  render() {
    return (
      <div>
        <textarea onChange={::this.onTextareaChange} value={this.state.markdown}/>
        <div>
          {converter.makeHtml(this.state.markdown)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('[data-app="article-generator"]'));
