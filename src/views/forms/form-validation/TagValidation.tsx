// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'

// ** Third Party Imports
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

interface State {
  password: string
  showPassword: boolean
}

interface FormInputs {
  slug: string
  password: string
  Name: string
  textarea: string
}

const defaultValues = {
  slug: '',
  password: '',
  Name: '',
  textarea: '',
}

const tagValidation = () => {
  // ** States
  const [loading, setLoading] = useState<boolean>(false)
  const [state, setState] = useState<State>({
    password: '',
    showPassword: false
  })

  // ** Hook
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({ defaultValues })

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onSubmit = async () => {
    setLoading(true)
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(2000)
    setLoading(false)
    toast.success('Form Submitted')
  }

  return (
    <Card>
      <CardHeader title='Add New Tag' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Controller
                  name='Name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Name'
                      onChange={onChange}
                      placeholder='Name'
                      error={Boolean(errors.Name)}
                      aria-describedby='validation-async-first-name'
                    />
                    
                  )}
                />
                <p>The name is how it appears on your site.</p>
                {errors.Name && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-async-first-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Controller
                  name='slug'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Slug'
                      onChange={onChange}
                      placeholder=''
                      error={Boolean(errors.slug)}
                      aria-describedby='validation-async-last-name'
                    />
                  )}
                />
                <p>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</p>
                {errors.slug && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-async-last-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Controller
                  name='textarea'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      rows={4}
                      multiline
                      {...field}
                      label='Bio'
                      error={Boolean(errors.textarea)}
                      aria-describedby='validation-basic-textarea'
                    />
                  )}
                />
                <p>The description is not prominent by default; however, some themes may show it.</p>
                {errors.textarea && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-textarea'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button size='large' type='submit' variant='contained'>
                {loading ? (
                  <CircularProgress
                    sx={{
                      color: 'common.white',
                      width: '20px !important',
                      height: '20px !important',
                      mr: theme => theme.spacing(2)
                    }}
                  />
                ) : null}
                Add New Tag
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default tagValidation
