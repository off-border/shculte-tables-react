import './StartButton.sass';

export default function StartButton({ onClick, children }) {
    return (
        <a className="StartButton" href="!#" onClick={() => onClick()}>
            {children}
        </a>
    );
}
