import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { io } from "socket.io-client"

// Components
import Navigation from './components/Navigation'
import Servers from './components/Servers'
import Channels from './components/Channels'
import Messages from './components/Messages'

// ABIs
import Dappcord from './abis/Dappcord.json'

// Config
import config from './config.json';

// Socket
const socket = io('ws://localhost:3030');

function App() {

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "15px" }}>Welcome to Dappcord</h1>

      <main>

      </main>
    </div>
  );
}

export default App;
