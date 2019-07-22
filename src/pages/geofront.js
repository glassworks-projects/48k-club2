import React from "react"
import {Wrapper, InLink, ExtLink, Navigation, Bluebar} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import gf_zero from "../media/posters/gf_zero.png"
import gf_one from "../media/posters/gf_one.png"
import gf_two from "../media/posters/gf_two.jpg"
import gf_three from "../media/posters/gf_three.png"

const Poster = styled.img`
  position: absolute;
  width: 400px;
`
const Scroll = styled.div`
  height: 1200px;
  ${'' /* width: 80%; */}
  margin: 0 auto;
  overflow-y: scroll;
`
export default class Geofront extends React.Component {
  render () {
    return (
      <Wrapper title="GeoFront">
        <body>
          <Bluebar name="GEOFRONT" />
          <Scroll>
            <Navigation />
            <Poster style={{top: `650px`, left: `20%`}} src={gf_two} />
            <Poster style={{top: `750px`, left: `55%`}} src={gf_three} />
            <Poster style={{top: `16%`, left: `18%`}} src={gf_zero} />
            <Poster style={{top: `30%`, left: `48%`}} src={gf_one} />
          </Scroll>
        </body>

      </Wrapper>
    )
  }
}
