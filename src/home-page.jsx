import { useState, useEffect } from 'react'
import './home-page.css'
import Cookies from 'js-cookie';
import { Box, Button, Flex,  Input } from '@chakra-ui/react';

function App() {
  const [players, setPlayers] = useState({}); 
  const [showInput, setShowInput] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentScore, setCurrentScore] = useState('');

  const handleAddPlayer = () => {
    setShowInput(true);
  
  };
  const handleInputChange = (e) => {
    setCurrentName(e.target.value);
  };
  const handleScoreChange = (e) => {
    setCurrentScore(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && currentName.trim() !== '') {
      const trimmedName = currentName.trim();
      setPlayers({
        ...players,
        [trimmedName]: parseInt(currentScore) || 0 // Convert score to integer, default to 0 if NaN
      });
      setCurrentName('');
      setCurrentScore('');
      setShowInput(false);
    }
  };
  const handleIncreaseScore = (name) => {
    setPlayers({
      ...players,
      [name]: (players[name] || 0) + 5 
    });
  };
  const handleDecreaseScore = (name) => {
    setPlayers({
      ...players,
      [name]: (players[name] || 0) - 5 
    });
  };

  const highestScorePlayer = Object.keys(players).reduce((a, b) => players[a] > players[b] ? a : b, '');
  return (
    <Box alignItems="center"  justifyContent="center" display="flex" flexDirection="column">
      

      
      <Button size="lg" mb =  '5%'w = '150%'>
        Seattle Dominos
      </Button>
      {showInput && (
        <Input mb = {2} placeholder="Enter player name" 
        value={currentName}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}/>
      )}
      {Object.entries(players).map(([name, score], index) => (
        <Box mb={2} key={index}>

        <Button size="lg" onClick={() => handleDecreaseScore(name)} mr = {2} >-5</Button>
        <Button size="lg" disabled colorScheme={name === highestScorePlayer && score > 0 ? "green" : "gray"}>
          {name + "  |  " + score }
        </Button>
        <Button size="lg" onClick={() => handleIncreaseScore(name)} ml = {2}>+5</Button>
        </Box>
      ))}
      <Button size="lg" onClick={handleAddPlayer}>
        Add Player
      </Button>
      
      

    </Box>
  );
}

export default App
