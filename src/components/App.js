import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

async loadWeb3() {
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
}

async loadBlockchainData() {
  const web3 = window.web3

  // Load account
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
}

constructor(props) {
  super(props)
  this.state = {
    account: ''
  }
}


  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colors Tokens
          </a>
          <ul className="navbar-nav px-3">
           <li className = "nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">
              {this.state.account}
            </span></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
