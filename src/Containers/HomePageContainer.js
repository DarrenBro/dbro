import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import FontAwesome from 'react-fontawesome';
import { Select } from 'react-form';
import styles from '../styles/App.css';

class HomePageContainer extends Component {
    render() {
        const options = ['DBrona', 'Games', 'Dexter'];

        return (
            <div className={styles.center_text}>
                <header className={styles.dbro_header}>
                    <h1 className={styles.dbro_title}>Welcome to DBro's Space ;)</h1>
                </header>

                {/*<span>*/}
                {/*<Dropdown options={options} value="Options"/>*/}
                {/*<FontAwesome*/}
                {/*className="super-crazy-colors"*/}
                {/*name="caret-down"*/}
                {/*size="lg"*/}
                {/*style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}/>*/}
                {/*</span>*/}

                <div className="flex-container">
                    <div>
                        <img
                            src='https://lh3.googleusercontent.com/z-NwJIDnPspnI9DRUbgnGcfB77E9qMY7nRAA53HGDbam6jYmdB6UMVuMq2aO4Q-ZRKJ-1ge7AN1jF0PnT3yu7_9Ihvyy1anMYAcI2FfYJOlMtft1uH1xCmZYP8qCQ5ODOwYQnLclSi8'
                            alt="DBrona"/>
                        <span className="small-text">DBrona</span>
                    </div>
                    <div>
                        <img
                            src='https://lh3.googleusercontent.com/Z4vQf77YDhYgr5uUH3OGZPxYjNrPkntay2jSx3Hi0PbISmaWlFrHzY7mQSHq4gITBnq4O5xiCadMsnDpMqCFpQbFuQ0_XnInF7zSPj98-PtY-rFLuFZbXKq1YwSCpcZvnCrdxMGiu5Q'
                            alt="Mario"/>
                        <span className="small-text">Games</span>
                    </div>
                    <div>
                        <img
                            src='https://lh3.googleusercontent.com/5Ek5-j41SeChhwSrIrv11ULC3Ge10za41zyKQG-eu3vaUjrQJ7lZilIt2fKeYObkxv3Vg5quzALDwMlniSgyFGBAexIwYTn_qfeab4cRusE5GvQLuCfdQkI_b1379mYYKeLzvjpP3Pw'
                            alt="Dexter"/>
                        <span className="small-text">Dexter</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePageContainer;
