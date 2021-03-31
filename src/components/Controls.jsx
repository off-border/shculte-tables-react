import './Controls.sass';
import StartButton from './StartButton';
import { useEffect } from 'react';

export default function Controls({
    gameStarted,
    startStopGame,
    goToNextNumber,
    nextNumber
}) {

    useEffect(() => {
        const spaceListener = e => {
            if (e.code === 'Space') {
                goToNextNumber();
            }
        };
        document.addEventListener('keyup', spaceListener);

        return () => document.removeEventListener('keyup', spaceListener);
    }, [goToNextNumber]);

    return (
        <div className="Controls">
            <StartButton onClick={startStopGame}>
                {gameStarted ? 'STOP' : 'START'}
            </StartButton>

            <p className="Controls__next-number">NEXT: {nextNumber}</p>

            {gameStarted ? (
                <div className="Controls__hint">
                    <p>
                        Try to look at the center of the table and find the next
                        number with your side seeing.
                    </p>
                    <p>
                        When you found it press SPACE to check if the number was
                        correct and go to the next one.
                    </p>
                </div>
            ) : (
                <div className="Controls__hint">
                    Prest the "START" button to shuffle the numbers and start
                    training
                </div>
            )}
        </div>
    );
}
