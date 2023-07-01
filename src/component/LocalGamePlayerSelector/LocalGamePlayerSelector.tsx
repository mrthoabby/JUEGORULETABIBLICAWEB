import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import player from "../../assets/images/player.jpg";
import { IPlayer } from "../../domain";
import { EventGame } from "../../domain/Classes/EventGame";
import { Player } from "../../domain/Classes/Player";
import { EnumEventGameType } from "../../domain/Enums/EnumEventGameType";
import { initializeGame } from "../../store/slices/currentGame";
import styles from "./styles.module.css";
const initialPlayersForLocalGame = [
    <input
        key={"player0"}
        name={"player0"}
        placeholder={"@Usuario"}
    ></input>,
    <input
        key={"player1"}
        name={"player1"}
        placeholder={"@Usuario"}
    ></input>
]
interface InputReactElement {
    key: string;
}

const getInputs = (playersNumber: number) => {
    let playersArray = [];
    for (let index = 0; index < playersNumber; index++) {
        playersArray.push(<input
            key={index}
            name={`player${index}`}
            placeholder={`@Jugador ${index + 1}`}
        />)
    }
    return playersArray;
}
export const LocalGamePlayerSelector = () => {
    const [inputLocalPlayers, setInputLocalPlayers] = useState(initialPlayersForLocalGame);

    const dispatch = useDispatch();

    const startGame = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let players: IPlayer[] = [];
        for (let index = 0; index < inputLocalPlayers.length; index++) {
            const element = inputLocalPlayers[index] as InputReactElement;
            const namePLayer = event.currentTarget[element.key].value;

            //Implementar modal que vaya en concordancia al juego en lugar de alert
            if (namePLayer === "") return alert("Por favor ingrese un nombre de usuario"
            );
            if (players.find(player => player.name === namePLayer)) return alert("Por favor ingrese un nombre de usuario diferente"
            );
            const player = new Player(namePLayer).serialize();
            players.push(player);
        }
        if (players.length < 2) return alert("Por favor ingrese al menos dos jugadores");
        else {
            const eventGame = new EventGame(EnumEventGameType.START_GAME, "El juego ha comenzado", "").serialize();
            dispatch(initializeGame({ events: [eventGame], players: players }))
        }
    }, []);
    const definePLayers = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const playersNumber = target.value as unknown as number;
        setInputLocalPlayers(getInputs(playersNumber));
    }, []);
    return (
        <>
            <img width={80} className={styles.player} src={player}></img>
            <form onSubmit={startGame} className={styles.form}>
                <span className={styles.players}>
                    <input
                        type="range"
                        name="players"
                        min={2}
                        max={10}
                        value={inputLocalPlayers.length}
                        onChange={definePLayers}></input>
                    [{inputLocalPlayers.length}] <small>
                        Jugadores
                    </small>
                </span>
                <section className={styles.playersContainer}>
                    {inputLocalPlayers}
                </section>
                <button type="submit" >Comenzar a jugar</button>
            </form>
        </>
    );
}