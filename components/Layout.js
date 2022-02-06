import React from 'react'
import Head from 'next/head'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import useStyles from '../utils/styles'

export const Layout = ({children}) => {
	const classes = useStyles()

	return (
		
  	<div>

			<Head>
				<title>NEXT APP!</title>
			</Head>

			<AppBar className={classes.navbar} position="static">
				<Toolbar>
					<Typography variant="h6">
							NEXT STORE
					</Typography>
				</Toolbar>
			</AppBar>

			<Container className={classes.main}>
				{children}
			</Container>

			<footer className={classes.footer}>
				<Typography>
					Footer is here
				</Typography>
			</footer>
		</div>
		
	)
}
