import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import logo from '../assets/gatewayLogo.svg'
import logo2 from '../assets/logoskylabs.png'
import * as ROUTES from '../Routes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      color: theme.palette.text.primary,
      height: 50,
      width: 97,
    },
    contentContainer: {
      justifyContent: 'center',
      display: 'flex',
    },

    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 0,
      padding: 0,
      marginLeft: 15,
    },
    strippedLink: {
      textDecoration: 'none',
      backgroundColor: 'transparent',
      color: '05425f',
    },
    h2: {
      margin: 0,
      padding: 0,
      marginBottom: -10,
    },
    h3: {
      margin: 0,
      padding: 0,
    },
  }),
)

export default function LogoComponent(): ReactElement {
  const classes = useStyles()

  return (
    <Link className={classes.strippedLink} to={ROUTES.LANDING_PAGE}>
      <div className={classes.contentContainer}>
        <img className={classes.img} src={logo2} alt="logo" />
        <div className={classes.textContainer}>
          <h2 className={classes.h2}>Skylabs</h2>
          <h3 className={classes.h3}>Verdi i gjestenett</h3>
        </div>
      </div>
    </Link>
  )
}
