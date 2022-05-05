import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ tabsContent, movieInfo }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { overview, vote_average, genres } = movieInfo;

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        tabsContent.map((tab, index) => {
                            return <Tab label={tab} {...a11yProps(index)} />
                        })
                    }
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                Here goes SUGGESTED
            </TabPanel>
            <TabPanel value={value} index={1}>
                Here goes EXTRAS
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h3>Description</h3>
                <p>{overview}</p>
                <h3>Rating: <span>{vote_average} / 10</span></h3>
                <h3>Genres:</h3>
                <ul>
                    {genres?.map((genre, key) => {
                        return <li key={key}> {genre.name} </li>
                    })}
                </ul>
            </TabPanel>

        </Box>
    );
}