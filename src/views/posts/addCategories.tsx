// ** React Imports
import { ChangeEvent, MouseEvent, useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import MessageOutline from 'mdi-material-ui/MessageOutline'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

interface State {
  password: string
  showPassword: boolean
}

const addCategories = () => {
  // ** States
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })
  const [confirmPassValues, setConfirmPassValues] = useState<State>({
    password: '',
    showPassword: false
  })

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Card>
      <CardHeader title='Add New Category ' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label='Name' placeholder='' />
              <p className='category-subtitle'>The name is how it appears on your site.</p>
            </Grid>
            <Grid item xs={12}>
            <TextField fullWidth label='Slug' placeholder='' />
            <p className='category-subtitle'>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, 
              and hyphens.</p>
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
                    <InputLabel id='form-layouts-tabs-select-label'>Parent Category</InputLabel>
                    <Select
                      label='Parent Category'
                      defaultValue='None'
                      id='form-layouts-tabs-select'
                      labelId='form-layouts-tabs-select-label'
                    >
                      <MenuItem value='None'>None</MenuItem>
                      <MenuItem value='Design'>Design</MenuItem>
                      <MenuItem value='Industry'>Industry</MenuItem>
                      <MenuItem value='Uncategorized'>Uncategorized</MenuItem>
                    </Select>
                    <p className='category-subtitle'>Categories, unlike tags, can have a hierarchy. You might have a Jazz category, 
                      and under that have children categories for Bebop and Big Band. Totally optional.</p>
                  </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label='Description '
                placeholder=''
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MessageOutline />
                    </InputAdornment>
                  )
                }}
              />
              <p className='category-subtitle'>The description is not prominent by default; however, some themes may show it.</p>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button type='submit' variant='contained' size='large'>
                  Add New Category
                </Button>
               
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default addCategories
