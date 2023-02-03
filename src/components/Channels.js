const Channels = ({ provider, account, dappcord, channels, currentChannel, setCurrentChannel }) => {

  return (
    <div className="channels">
      <div className="channels__text">
        <h2>Text Channels</h2>

      </div>

      <div className="channels__voice">
        <h2>Voice Channels</h2>

        <ul>
          <li>Channel 1</li>
          <li>Channel 2</li>
          <li>Channel 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Channels;