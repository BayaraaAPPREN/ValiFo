import { Button, Grid } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
const Login = () => {
    return (
        <Grid
           container
           spacing={0}
           direction="column"
           alignItems="center"
           justifyContent="center"
           style={{ minHeight: '100vh' }}>
               <Button variant='contained' startIcon={GoogleIcon}>
                   Sign in google</Button>
        </Grid>
    )
}


export default Login