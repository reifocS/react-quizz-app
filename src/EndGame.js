import React from 'react';
import { TabContainer, TabContent, Table, TableRow } from './components'
import Tabs from './Tabs';
import Recap from './Recap';

const EndGame = ({ points, bilan }) => {
    return (
        <TabContainer>
            <h1>Overview</h1>
            <div style={{"overflow" : "auto"}}>
            <Tabs>
                <TabContent label="Stats">
                    You scored {points} out of {bilan.length} !
        </TabContent>
                <TabContent label="Answers">
                    <Table>
                        <thead>
                            <tr>
                                <th colSpan="3">Results</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TableRow>Question</TableRow>
                                <TableRow>Your answer</TableRow>
                                <TableRow>Correct answer</TableRow>
                            </tr>
                            <Recap bilan={bilan}/>
                        </tbody>
                    </Table>
                </TabContent>
            </Tabs>
            </div>
        </TabContainer>
    );
}


export default EndGame;