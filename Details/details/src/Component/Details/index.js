import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { withRouter } from 'react-router'
const useStyles = makeStyles(theme => ({
    detailsContainer: {
        // background: "red"
        marginTop: "100px"
    },
    mainContainer: {
        margin: "0 auto",
        width: "400px",
        padding: "20px",
        boxShadow: "4px 4px 24px rgba(94, 134, 196, 0.1)"
    },
    headerText: {
        fontSize: "26px",
    },
    subHeader: {
        marginLeft: "7px"
    }
}))
const Details = (props) => {
    const { data } = props;

    const classes = useStyles()
    console.log(props.match.params.id, "id")
    const api = `https://secure.drivezy.com/city/${props.match.params.id}`
    const [eachCityDetail, setEachCityDetail] = useState(null)
    const cityData = data
    const fetchEachDetail = () => {
        axios(api).then(({ data }) => {
            setEachCityDetail(data.response)
        })
    }
    // React.useEffect(() => {
    //     fetchEachDetail()
    // }, [])
    React.useEffect(() => {
        if (!data.id) {
            fetchEachDetail()
        }
        if (cityData) setEachCityDetail(cityData)
        if (eachCityDetail) setEachCityDetail(eachCityDetail)
    }, [])


    console.log(eachCityDetail, "cityDetail")
    // console.log(data, "data")
    // const [cityData, setCityData] = useState([])

    // fetchDetail()
    // console.log(cityData, "api")
    return (
        <div className={classes.detailsContainer} >
            <h1 className={classes.headerText}>Detail Of City </h1>

            {eachCityDetail &&
                <div>
                    <div className={classes.eachDetailsContainer}>
                        <img src={eachCityDetail.image} alt="" />
                        <h3 className={classes.mainText}>Place :<span className={classes.subHeader}>{eachCityDetail.name}</span></h3>
                    </div>
                    <div className={classes.eachDetailsContainer}>
                        <h3 className={classes.mainText}>Name :<span className={classes.subHeader}>{eachCityDetail.contact_person}</span> </h3>
                    </div>
                    <div className={classes.eachDetailsContainer}>
                        <h3 className={classes.mainText}>Number :<span className={classes.subHeader}>{eachCityDetail.contact_number}</span></h3>
                    </div>
                </div>

            }
        </div>

    )
}

export default withRouter(Details);
