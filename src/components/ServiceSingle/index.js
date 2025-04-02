
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './style.css'
import Contact from './contact';
import Services from '../../api/service'


const ServiceSingle = ({ maxWidth, open, onClose, item }) => {
    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <i className="fa fa-close"></i>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={onClose}>

                </DialogTitle>
                <Grid className="modalBody modal-body">
                    <div className="wpo-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-main-img">
                                                <img src={item.sImgS} loading="lazy" alt={item.sTitle} />
                                            </div>
                                            <div className="wpo-service-single-title">
                                                <h3>{item.sTitle}</h3>
                                            </div>
                                            <p className="text-justify">{item.des1}</p><br />
                                            <p className="text-justify">{item.des2}</p>
                                            <div className="flex flex-row flex-wrap justify-center pt-9">
                                                <div className="basis-1/2 sm:basis-full">
                                                    <div className="wpo-p-details-img pr-2 sm:pr-0">
                                                        <img src={item.ssImg1} loading="lazy" alt={item.sTitle} />
                                                    </div>
                                                </div>
                                                <div className="basis-1/2 sm:basis-full">
                                                    <div className="wpo-p-details-img pl-2 sm:pl-0">
                                                        <img src={item.ssImg2} loading="lazy" alt={item.sTitle} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-service-single-item list-widget">
                                            <div className="wpo-service-single-title">
                                                <h3>My Capabilities</h3>
                                            </div>
                                            <p>{item.capabilities.desc}</p>
                                            <ul>
                                                {item.capabilities.points.map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>My approach</h3>
                                            </div>
                                            <p>{item.approch}</p>
                                        </div>
                                        <div className="wpo-service-single-item list-widget">
                                            <div className="wpo-service-single-title">
                                                <h3>My Work Process</h3>
                                            </div>
                                            <ul>
                                                {item.process.map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Related Service</h3>
                                            </div>
                                            <div className="wpo-service-area">
                                                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                                    {Services.slice(0, 3).map((service, srv) => (
                                                        <div className="mx-3 md:mx-0 md:my-3" key={srv}>
                                                            <div className="wpo-service-item">
                                                                <i className={`fi ${service.icon}`} ></i>
                                                                <h2>{service.sTitle}</h2>
                                                                <p>{service.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-contact-area">
                                                <div className="wpo-contact-title">
                                                    <h2>Have project in mind? Let's discuss</h2>
                                                    <p>Get in touch with us to see how we can help you with your project</p>
                                                </div>
                                                <div className="wpo-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ServiceSingle

