import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {

  const [expanded, setExpanded] = React.useState < string | false > (false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (

    <><div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Verksted Navn 1
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Værksted sted
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Værksted info
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Værksted Navn 2
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Værksted sted
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Værksted info
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Værksted navn 3
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Værksted sted
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Værksted info
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Værksted Navn 4
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Værksted sted
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Værksted info
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div><div className="App">
        <header className="App-header">
          Vegvesen verksted lista

          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div></>
  );
}

export default App;
