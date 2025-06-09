
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const InputText = styled(TextField).withConfig({
    shouldForwardProp: (prop) => ['type'].includes(prop),
})(({ theme }) => ({
    marginTop: '20px',
    width: '80%',
    '& label': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& input': {
            color: 'black',
        },
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
    '& label.Mui-focused': {
        color: 'black',
    },
}));

export default InputText;
