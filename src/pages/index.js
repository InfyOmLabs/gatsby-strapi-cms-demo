import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/home.css";


const IndexPage = (props) => {
    const title = props.data.allStrapiRestaurant.edges;
    const categories = props.data.allStrapiCategories.edges;
    const services = props.data.allStrapiServices.edges;
    const team = props.data.allStrapiTeam.edges;

    return (
        <Layout>
            <SEO title="Home"/>
            <h1 className="text-center p-3">{title[0].node.name}</h1>

            <div className="heading-text-main">
                <div className="heading-text-sub">
                    <h1 className="main-heading">
                        {categories[0].node.name}
                    </h1>
                    <span className="main-name">
                        {categories[1].node.name}
                    </span>
                </div>
            </div>

            <div className="service m-4">
                <h1 className="text-center">
                    About Us
                </h1>
                <div className="row">
                    {services && services.map((service, index) => {
                        return (
                            <div className="col-lg-4 p-0 p-b-25" key={index}>
                                <div className="service-text">
                                    <img src={service.node.icon.childImageSharp.fixed.src} alt={service.node.name}/>
                                    <h3 className="service-heading">
                                        {service.node.name}
                                    </h3>
                                    <span className="service-description">
                                        {service.node.description}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <h1 className="text-center">
                Team Members
            </h1>
            <div className="row team">
                {team.map((leader, index) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-3 col-xl-2" key={index}>
                            <div className="team-inner-div">
                                <img src={leader.node.image.childImageSharp.fixed.src}
                                     className="leader-img img-fluid mb-1" alt={leader.name} width="240px"
                                     height="250px"/>
                            </div>
                            <div className="text-center">
                                <h4 className="mb-0">{leader.node.name}</h4>
                                <h6>{leader.node.description}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
query {
    allStrapiRestaurant {
        edges {  
            node {
                strapiId
                name
                description
            }
        }
    }
    
    allStrapiCategories {
        edges {
            node {
                name
            }
        }
    }
    
    allStrapiServices {
        edges {
            node {
                name
                description
                icon {
                    childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
            }
        }    
    }
  
    allStrapiTeam {
        edges {
            node {
                name
                description
                image {
                    childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
            }
        }   
    } 
}
`