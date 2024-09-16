import React from 'react';
import Countdown from 'react-countdown';
import ReactPlayer from 'react-player';
import './App.css';
import image from './assets/default.avif';

const Completionist = () => <span>Grattis! Din EX40 har anlänt!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div style={styles.container}>
        <img src={image} alt="Countdown background" style={styles.image} />
        <h1 style={styles.header}>TIME REMAINING</h1>
        <div style={styles.timer}>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{String(days).padStart(2, '0')}</span>
            <span style={styles.label}>DAYS</span>
          </div>
          <div style={styles.separator}>:</div>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{String(hours).padStart(2, '0')}</span>
            <span style={styles.label}>HOURS</span>
          </div>
          <div style={styles.separator}>:</div>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{String(minutes).padStart(2, '0')}</span>
            <span style={styles.label}>MINUTES</span>
          </div>
          <div style={styles.separator}>:</div>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{String(seconds).padStart(2, '0')}</span>
            <span style={styles.label}>SECONDS</span>
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    letterSpacing: '2px',
    padding: '20px'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
    opacity: 0.3
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
    zIndex: 1,
  },
  timer: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  timeUnit: {
    margin: '0 10px',
    textAlign: 'center'
  },
  number: {
    fontSize: '4rem',
    display: 'block'
  },
  label: {
    fontSize: '1rem',
    marginTop: '10px'
  },
  separator: {
    fontSize: '4rem',
    margin: '0 10px'
  },
  playerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2,
    opacity: 0.0 
  }
};

const AppCSS = `
@media (max-width: 768px) {
  .timeUnit span.number {
    font-size: 2.5rem;
  }
  .separator {
    font-size: 2.5rem;
  }
  .header {
    font-size: 1.5rem;
  }
  .label {
    font-size: 0.8rem;
  }
}
`;

function App() {
  const deliveryDate = new Date('2024-10-14T00:00:00');

  return (
    <div>
      <style>{AppCSS}</style>
      <Countdown date={deliveryDate} renderer={renderer} />
      <ReactPlayer
        url='https://www.youtube.com/watch?v=niKT-kJfUz4'
        playing
        loop
        controls={false}
        volume={0.5}
        muted={false}
        width='100%'
        height='100%'
        style={styles.playerWrapper}
      />
    </div>
  );
}

export default App;
