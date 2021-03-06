import React, { Component } from 'react'
import {Grid} from 'material-ui'
import { withStyles, withTheme } from 'material-ui/styles'

const styles = theme => ({
  HeroSection: {
    display: 'flex',
    height: '40px',
    backgroundPosition: '170% 25%',
    backgroundSize: '80%',
    fontFamily: '"Montserrat", sans-serif',
    color: 'white',
    padding: '5px',
    WebkitAppRegion: 'drag',
    backgroundColor: theme.palette.CardTileMana
  }
})

@withStyles(styles) @withTheme()
class TrackerHeader extends Component {
  render () {
    return (
      <Grid container spacing={0}>
        {this.renderHeros(this.props.hero)}
      </Grid>
    )
  }

  renderHeros (hero) {
    let position = {}
    if (!hero) {
      hero = {
        info: {
          cardClass: 'Unknown'
        }
      }
    } else {
      let img = hero.info.cardClass.toLocaleLowerCase()
      position.background = `linear-gradient(to right, #546E7A 0, rgba(255, 255, 255, 0) 95%), url(/static/classes/${img}.png) 10% 25%`
    }
    let textPosition = {alignSelf: 'flex-end'}
    return (
      <Grid className={this.props.classes.HeroSection} style={position} item xs={12}>
        <span style={textPosition}>{hero.info.cardClass}</span>
      </Grid>
    )
  }


}

export default TrackerHeader
