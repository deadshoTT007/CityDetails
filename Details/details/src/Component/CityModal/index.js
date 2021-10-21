import React from 'react'
import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    modal: {
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(129, 125, 145, 0.61)",
        // opacity: "0.6",
        position: "absolute",
        top: "0",
        left: "0",
        '& div': {
            outline: "none",
        }
    },
    modalContainer: {
        position: "relative",
        width: "70vw",
        maxWidth: "1000px",
        height: "520px",
        marginTop: "10%",
        backgroundColor: "#fff",
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "4px 4px 24px rgba(94, 134, 196, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainContainer: {
        margin: "0 auto",
        width: "400px",
        padding: "20px",
    },
    headerText: {
        fontSize: "26px",
    },
    subHeader: {
        marginLeft: "7px"
    }
}))


const CityModal = ({ open, closeModal, modalData }) => {
    const classes = useStyles()
    console.log(modalData, "modal")
    return (
        <Modal className={classes.modal}
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            {modalData &&
                <div className={classes.modalContainer}>
                    <div>
                        <div className={classes.eachDetailsContainer}>
                            <img src={modalData.image} alt="" />
                            <h3 className={classes.mainText}>Place :<span className={classes.subHeader}>{modalData.name}</span></h3>
                        </div>
                        <div className={classes.eachDetailsContainer}>
                            <h3 className={classes.mainText}>Name :<span className={classes.subHeader}>{modalData.contact_person}</span> </h3>
                        </div>
                        <div className={classes.eachDetailsContainer}>
                            <h3 className={classes.mainText}>Number :<span className={classes.subHeader}>{modalData.contact_number}</span></h3>
                        </div>
                    </div>
                </div>
            }

        </Modal>
    )
}

export default CityModal
