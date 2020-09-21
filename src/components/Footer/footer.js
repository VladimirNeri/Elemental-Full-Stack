import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import { FootStyl } from './footer.style';
import Form from './form';

class Footer extends Component {
  state = {
    showList: false,
    highlightedText: false,
  };

  switch = () => {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }));
  };

  listSwitch = () => {
    this.setState((state) => ({
      highlightedText: !state.highlightedText,
    }));
  };

  render() {
    return (
      <FootStyl>
        <div className='footer'>
          <button className='display' onClick={this.switch}>
            {this.state.showList ? 'Close' : 'Footer'}
          </button>

          <CSSTransition
            in={this.state.showList}
            timeout={400}
            classNames='list-transition'
            unmountOnExit
            appear
            onEntered={this.listSwitch}
            onExit={this.listSwitch}
          >
            <div className='list-body'>
              <div className='signup'>
                <Form />
              </div>
              <div className='exclusive'>
                <h3 className='title'>Digital Publications / Exclusive Content</h3>
              </div>
              <div
                className={cx('copyright', {
                  'list-item--active': this.state.highlightedText,
                })}
              >
                © Vladimir Neri, for Demo Purposes Only
              </div>
            </div>
          </CSSTransition>
        </div>
      </FootStyl>
    );
  }
}

export default Footer;
