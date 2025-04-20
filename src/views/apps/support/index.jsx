'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import FaqHeader from '@/views/apps/support/FaqHeader'
import Faqs from '@/views/apps/support/Faqs'
import FaqFooter from '@/views/apps/support/FaqFooter'

const FAQ = ({ data }) => {
  // States
  const [searchValue, setSearchValue] = useState('')

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <FaqHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Faqs faqData={data} searchValue={searchValue} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <FaqFooter />
      </Grid>
    </Grid>
  )
}

export default FAQ
