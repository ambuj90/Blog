// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import TableServerSide from 'src/views/table/data-grid/TableServerSide'
import FormLayoutsBasic from 'src/views/forms/form-layouts/FormLayoutsBasic'

const Categories = () => {
    return (
        <Grid container spacing={6}>
            <PageHeader
                title={
                    <Typography variant='h5'>
                        <Link href='https://mui.com/x/react-data-grid/' target='_blank'>
                            Categories
                        </Link>
                    </Typography>
                }


            />
            <Grid item xs={4}>
                <FormLayoutsBasic />
            </Grid>
            <Grid item xs={8}>
                <TableServerSide />
            </Grid>

        </Grid>
    )
}

export default Categories
