import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';



const choices = [
    { name: 'rock', icon: 'hand-rock-o' },
    { name: 'paper', icon: 'hand-paper-o' },
    { name: 'scissors', icon: 'hand-scissors-o' },
];

const App = () => {
    const [result, setResult] = useState(null);
    const [score, setScore] = useState({ player: 0, computer: 0 });

    const playGame = (playerChoice) => {
        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[randomIndex].name;

        if (playerChoice === computerChoice) {
            setResult("It's a tie!");
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            setResult('You win!');
            setScore((prevScore) => ({ ...prevScore, player: prevScore.player + 1 }));
        } else {
            setResult('You lose!');
            setScore((prevScore) => ({ ...prevScore, computer: prevScore.computer + 1 }));
        }
    };

    const resetGame = () => {
        setResult(null);
        setScore({ player: 0, computer: 0 });
    };

    return (

        <View style={styles.container}>

            <LinearGradient
                colors={["purple", "pink", "white"]}
                start={{ x: 0, y: 0.8 }}
                end={{ x: 1, y: 1 }}
                style={styles.background}
            >
                <Text style={styles.title}>Rock, Paper, Scissors</Text>
                <Text style={styles.score}>
                    Score: Player {score.player} - {score.computer} Computer
                </Text>
                <View style={styles.choicesContainer}>
                    {choices.map((choice) => (
                        <TouchableOpacity
                            key={choice.name}
                            style={styles.choiceButton}
                            onPress={() => playGame(choice.name)}
                        >
                            <Icon name={choice.icon} size={50} color="black" />
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.result}>{result}</Text>
                <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                    <Text style={styles.resetText}>Reset Game</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'orange',
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    choicesContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    choiceButton: {
        backgroundColor: 'pink',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    result: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    resetText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default App;
