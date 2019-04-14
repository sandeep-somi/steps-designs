import React from 'react';

export default class Steps extends React.Component {

  render() {

    return (
      <div className="steps-wrapper">
        <Step />
      </div>
    )
  }
}

class Step extends React.Component {

  render() {

    return (
      <div className="step">
        <div className="vr-first first purple">
          <span className="dot"></span>
          <span className="slide purple"></span>
          <div className="b-ring purple">
            <div className="inner-ring purple">
              <p>STEP</p>
              <p>1</p>
            </div>
          </div>
          <div className="semi-ring purple"></div>
          <div className="main-div">
            <div className="main purple">
              <h1>Lorem ipsum heading</h1>
              <p>here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content</p>
              <div className="semi-ring-right purple"><i className="fas fa-cog"></i></div>
            </div>
          </div>
          <div className="flat-semi-ring purple">25%</div>
        </div>

        <div className="vr-first green">
          <span className="dot"></span>
          <span className="slide green"></span>
          <div className="b-ring green">
            <div className="inner-ring green">
              <p>STEP</p>
              <p>2</p>
            </div>
          </div>
          <div className="semi-ring green"></div>
          <div className="main-div">
            <div className="main green">
              <h1>Lorem ipsum heading</h1>
              <p>here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content</p>
              <div className="semi-ring-right green"><i className="fas fa-lightbulb"></i></div>
            </div>
          </div>
          <div className="flat-semi-ring green">50%</div>
        </div>

        <div className="vr-first org">
          <span className="dot"></span>
          <span className="slide org"></span>
          <div className="b-ring org">
            <div className="inner-ring org">
              <p>STEP</p>
              <p>3</p>
            </div>
          </div>
          <div className="semi-ring org"></div>
          <div className="main-div">
            <div className="main org">
              <h1>Lorem ipsum heading</h1>
              <p>here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content</p>
              <div className="semi-ring-right org"><i className="fas fa-home"></i></div>
            </div>
          </div>
          <div className="flat-semi-ring org">75%</div>
        </div>

        <div className="vr-first last red">
          <span className="dot"></span>
          <span className="slide red"></span>
          <div className="b-ring red">
            <div className="inner-ring red">
              <p>STEP</p>
              <p>4</p>
            </div>
          </div>
          <div className="semi-ring red"></div>
          <div className="main-div">
            <div className="main red">
              <h1>Lorem ipsum heading</h1>
              <p>here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content. here goes the main content</p>
              <div className="semi-ring-right red"><i className="fas fa-seedling"></i></div>
            </div>
          </div>
          <div className="flat-semi-ring red">100%</div>
        </div>
      </div>
    )
  }
}