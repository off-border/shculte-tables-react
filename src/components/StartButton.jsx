import './StartButton.sass';

export default function StartButton({ onClick }) {
    // console.log('----onClick =', onClick);
    return (
        <a className="StartButton" href="#" onClick={() => onClick()}>
            START
        </a>
    );
}
