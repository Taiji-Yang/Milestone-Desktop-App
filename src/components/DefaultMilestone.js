import * as React from 'react';
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


const DefaultMilestone = (props) => {
    const { MilestoneData, DateData, updateMilestoneData, updateDateData, DataOnTable, updateDataOnTable} = props;
    const [open, setOpen] = React.useState(false);
    const [milestone, setMilestone] = React.useState('');
    const [date, setdate] = React.useState('');

    const handleChangeMilestone = (event) => {
        setMilestone(event.target.value);
    };

    const handleChangeDate = (event) => {
        setdate(event.target.value);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleOK = (event, reason) => {
        updateMilestoneData(d => (d.filter(item => item !== milestone)))
        updateDateData(d => (d.filter(item => item !== date)))
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

    return (
    <div>
        <Button sx={{width: "18vw", height:"5vw", fontSize:"1.1vw"}} variant="outlined" onClick={handleClickOpen}>Default Milestone</Button>
        <Dialog disableEscapeKeyDown open={open}>
            <DialogTitle>Please select</DialogTitle>
            <DialogContent>
                <Box component="form">
                    <FormControl sx={{ marginLeft:"7vw", marginRight:"1vw", marginTop:"2vw",  marginBottom: "2vw", minWidth: "10vw"}}>
                        <InputLabel>Milestone</InputLabel>
                        <Select
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
                    <FormControl sx={{ marginRight:"7vw", marginLeft:"1vw", marginTop:"2vw",  marginBottom: "2vw", minWidth: "10vw"}}>
                        <InputLabel>Date</InputLabel>
                        <Select
                            value={date}
                            onChange={handleChangeDate}
                            input={<OutlinedInput label="Date" />}
                        >
                            {DateData
                                    .map((SingleDate, index) => {
                                        console.log(SingleDate)
                                        return (
                                            <MenuItem key={SingleDate} value={SingleDate}>{SingleDate}</MenuItem>
                                        )
                                    })
                            }
                        </Select>
                    </FormControl>
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

  export default DefaultMilestone