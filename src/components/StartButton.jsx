import './StartButton.sass';

export default function StartButton({ onClick }) {
  return (
    <a className='StartButton' href="javascript:;" onClick={onClick}>
      START
    </a>
  );
}
