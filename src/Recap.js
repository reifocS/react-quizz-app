import React from 'react'
import { TableRow } from './components'

const Recap = ({ bilan }) => {

    return bilan.map(r => {
        return (
            <tr key={r.correct}>
                <TableRow>{`${r.question}`}</TableRow>
                <TableRow>{`${r.value}`} </TableRow>
                <TableRow>{`${r.correct}`}</TableRow>
            </tr>
        )
    }
    );
}

export default Recap; 