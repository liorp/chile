import React, { Component } from 'react';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, InputLabel,
    FormControl} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../style';


class ChileArg extends Component {
    render() {
        const { classes, name, type, value, enabled, required, options } = this.props;
        switch (type) {
            case 'int':
                return (
                    <TextField label={name}
                               type="number"
                               value={value}
                               required={required}
                               disabled={enabled == null ? false : !enabled } />
                );
            case 'str': 
                return (
                    <TextField label={name}
                               value={value}
                               required={required}
                               disabled={enabled == null ? false : !enabled} />
                );
            case 'bool':
                return (
                    <FormControlLabel label={name}
                                      control={
                        <Checkbox checked={value}
                                  required={required}
                                  disabled={enabled == null ? false : !enabled} />
                                } />
                );
            case 'enum':
                const optionElements = options.map(
                    (opt, i) => <MenuItem value={opt}>{opt}</MenuItem>)
                return (
                    <FormControl className={classes.formControl}>
                        <InputLabel>{name}</InputLabel>
                        <Select value={value}
                                required={required}
                                disabled={enabled == null ? false : !enabled}>
                            {optionElements}
                        </Select>
                    </FormControl>
                );
            default:
                return <span>Invalid Arg Type!!!</span>;
        }
    }
}

export default withStyles(styles)(ChileArg);
