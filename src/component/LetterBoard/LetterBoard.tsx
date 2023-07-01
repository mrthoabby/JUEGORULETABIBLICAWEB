import { Board } from "../Board/Board";
import { ButtonLetter } from "../ButtonLetter/ButtonLetter";
const consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
export const LetterBoard = () => {
    return (
        <Board
            width="50%"
            height="245px"
            bottom="15px"
            right="15px"
            useHeader
            headerText="Aquí pondré un texto informativo"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1px",
                padding: "10px",
                overflow: "auto"
            }}
        >
            {consonants.map((letter, index) => {
                return <ButtonLetter key={index} letter={letter} />
            })}
        </Board>
    );
}