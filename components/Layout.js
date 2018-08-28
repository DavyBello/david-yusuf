import { Fragment } from 'react'
import { Container } from 'reactstrap'
import Navbar from './Navbar'
// import SvgLoader from 'bv-react-svgloader'

export default props => (
  <Fragment>
  <Container>
    <Navbar/>
  </Container>
    <div className='bg-home page-header'></div>
    {/* <SvgLoader src='/static/images/home-background.svg'/> */}
    {props.children}
    <style jsx>{`
      .bg-home {
        background-image: url(/static/images/home-background.svg);
        height: 75vh;
        width: 100%;
      }
      .page-header {
        // height: 90vh;
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        // max-height: 1000px;
        align-items: center;
        background-size: cover;
        background-position: center center;
      }
    `}</style>
  </Fragment>
)
