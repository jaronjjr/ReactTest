import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FirstScreen =()=>{

    let values=[];

    const handleClickShowPassword=()=>{

    };

    const handleMouseDownPassword=()=>{

    };
    return (
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
         <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
           <FilledInput
             id="filled-adornment-password"
             type={values.showPassword ? 'text' : 'password'}
             value={values.password}
            //  onChange={handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                   edge="end"
                 >
                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
           />
         </FormControl>
         </div>
         </Box>
        

        )
}


export default FirstScreen