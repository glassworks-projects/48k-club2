import React from "react"
import {Release} from "../components/export"
import styled from "styled-components"
import st from "../media/album-artwork/st.jpg"
import {releasetext} from "../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

const P = styled.div`
  padding-left: 2vw;
`

const H2 = styled.h2`
  font-weight: 300;
`
const L = styled.ul`
  list-style: none;
  padding: none;
`
function Press () {
  return(
    <P>
      <H2>Press:</H2>
      <L>
        <li><a>here's an example</a></li>
      </L>
    </P>
  )
}

export default class ScreamTape extends React.Component {
  render() {
    return(
      <Release
        title="48K002 - Wild Kid - Scream Tape"
        img={st}
        artistName= "WILD KID"
        releaseName= "SCREAM TAPE"
        text={releasetext.st_about}
        href="https://smarturl.it/screamtape"
      />
    )
  }
}