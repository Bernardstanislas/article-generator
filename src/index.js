import React from 'react';
import ReactDOM from 'react-dom';
import Clipboard from 'clipboard';
import {Converter} from 'showdown';

import './style.less';

const converter = new Converter({
  'noHeaderId': true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '# Type your markdown here !'
    }
  }

  componentDidMount() {
    new Clipboard('#clipboard-button');
  }

  onTextareaChange({target: {value: markdown}}) {
    this.setState({markdown});
  }

  render() {
    const renderedHtml = converter.makeHtml(this.state.markdown);
    return (
      <div>
        <textarea onChange={::this.onTextareaChange} value={this.state.markdown}/>
        <button id="clipboard-button" data-clipboard-text={renderedHtml}>Copy to clipboard</button>
        <div>
          {renderedHtml}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('[data-app="article-generator"]'));
