// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import UserLeftOverview from '@views/apps/integrations/user-left-overview'
import UserRight from '@views/apps/integrations/user-right'

// Data Imports
import { getPricingData } from '@/app/server/actions'
const ConnectionsTab = dynamic(() => import('@views/apps/integrations/user-right/connections'))

// Vars
const tabContentList = data => ({
  connections: <ConnectionsTab />
})

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/pricing` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} */
const UserViewTab = async () => {
  // Vars
  const data = await getPricingData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, lg: 4, md: 5 }}>
        <UserLeftOverview />
      </Grid>
      <Grid size={{ xs: 12, lg: 8, md: 7 }}>
        <UserRight tabContentList={tabContentList(data)} />
      </Grid>
    </Grid>
  )
}

export default UserViewTab
