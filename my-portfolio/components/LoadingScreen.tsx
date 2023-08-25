import React, { useState } from 'react';
import styles from '../styles/LoadingScreen.module.scss'

const LoadingScreen = ({loaded}) => {
    const [isHidden, setHidden] = useState(false);

    var classes: string = `${styles.loadingScreenContainer}`;
    
    if (loaded) {
        classes += ` ${styles.loaded}`
    }

    const hideMe = () => {
        setHidden(true);
    }

    return isHidden ? <></> : (
        <div className={classes} onAnimationEnd={hideMe}>
            <div className={styles.loadingScreen} >
                <h1>Hello.</h1>
            </div>
            <div className="transparentMask"></div>
        </div>
    );
};



export default LoadingScreen;