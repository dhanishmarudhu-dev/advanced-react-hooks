import Tooltip from './components/tooltip';

const App = () => {

  return (
    <div style={{ marginTop: '60px', marginLeft: '60px' }}>
      <Tooltip text="I'm a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  )
}

export default App;