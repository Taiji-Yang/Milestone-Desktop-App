import * as React from 'react';
import { useRef, useCallback, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


const CustomizedMilestone = (props) => {
    const { MilestoneData, DateData, updateMilestoneData, updateDateData, DataOnTable, updateDataOnTable} = props;
    const [open, setOpen] = useState(false);
    const [milestone, setMilestone] = useState('');
    const [date, setdate] = useState('');
    const MilestoneSelectionRef = useRef(null);
    if(date){
    console.log(date)
    }

    const handleChangeMilestone = (event) => {
        setMilestone(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleOK = (event, reason) => {
        updateMilestoneData(d => (d.filter(item => item !== milestone)))
        updateDataOnTable([...DataOnTable, {"milestone":milestone, "date":date}])
        setMilestone('')
        setdate('')
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const handleCancel = (event, reason) => {
        setMilestone('')
        setdate('')
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const StringDateToNumber = {
        'Jan':"01",
        'Feb':"02",
        'Mar':"03",
        'Apr':"04",
        'May':"05",
        'Jun':"06",
        'Jul':"07",
        'Aug':"08",
        'Sep':"09",
        'Oct':"10",
        'Nov':"11",
        'Dec':"12",
    };
    return (
        <div>
            <Button sx={{ width: "18vw", height: "5vw", fontSize: "1.1vw" }} variant="outlined" onClick={handleClickOpen}>Customized Milestone</Button>
            <Dialog disableEscapeKeyDown open={open}>
                <DialogTitle>Please select</DialogTitle>
                <DialogContent>
                    <Box component="form"
                        sx={{
                            display: "flex",
                            alignItem: "center",
                            gap: "2vw"
                        }}
                    >
                        <FormControl
                            sx={{
                                width: "11vw",
                                marginTop: "2vw",
                                marginLeft:"7vw",
                                marginBottom: "2vw"
                            }}
                        >
                            <InputLabel>Milestone</InputLabel>
                            <Select
                                ref = {MilestoneSelectionRef}
                                value={milestone}
                                onChange={handleChangeMilestone}
                                input={<OutlinedInput label="Milestone" />}
                            >
                                {MilestoneData
                                    .map((Milestone, index) => {
                                        console.log(Milestone)
                                        return (
                                            <MenuItem key={Milestone} value={Milestone}>{Milestone}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                        <Box
                            sx={{
                                width: "11vw",
                                marginTop: "2vw",
                                marginRight:"7vw",
                                marginBottom: "2vw",
                            }}>
                                {/* <DatePicker

                                    label="Date"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    value={date}
                                    onChange={(newValue) => {
                                        let dateArray = newValue.toString().split(" ")
                                        if(dateArray.length >= 4){
                                            setdate(dateArray[3] + "-" + StringDateToNumber[dateArray[1]]+"-"+dateArray[2]);
                                        }
                                    }}
                                    renderInput={(params) => <TextField {...params}/>}

                                /> */}
                            <TextField
                                label="Date"
                                type="date"
                                onChange={(newValue) => {
                                    console.log(newValue.target.value)
                                    setdate(newValue.target.value);
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleOK}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CustomizedMilestone