import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from 'react-router-dom'
import { Grid } from '@mui/material'
import {Navbar,Footer} from './Reusables/index'
import {Home,Jobs,Companies} from './Pages/index'
import { useQueryClient,QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'

function App() {
const queryClient= new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
  <div className="App">
  <Navbar/>

<Grid alignItems='center' justifyContent='center'  container xs={12} md={11.5} className='App_Container'>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='Jobs' element={<Jobs/>}/>
<Route path='Companies' element={<Companies/>}/>
</Routes>

</Grid>


 <Footer/>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  
  )
}

export default App
