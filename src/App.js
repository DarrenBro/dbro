import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import FontAwesome from 'react-fontawesome';
import { Select } from 'react-form';
import './App.css';

class App extends Component {
render() {
    const options = ['DBrona', 'Games', 'Dexter'];

    return (
        <div className="center_text">
            <header className="dbro_header">
                <h1 className="dbro_title">Welcome to DBro's Space ;)</h1>
            </header>

        {/*<span>      */}
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

        <div id="setupSteps" className="collapse, black_border, code_padding">
            <div className="btn-group">
                {/*<Select className="select_style" options={options} />*/}
                <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#setupSteps">
                    Project setup steps
                </button>
            </div>

            <h2>This site was hosted free with <a href="https://surge.sh/">Surge</a></h2>
            <h3>In your project dir, run;</h3>

                <h5>npm run build</h5>
                <h5>surge</h5>
                <h5>project path -> path/to/my-project/build</h5>
                <h5>domain name -> anything you want! (Must end with .surge.sh)</h5>
                <h5>example script -> "dbro": "react-scripts build && echo dbro.surge.sh > CNAME && mv CNAME build/ && surge"</h5>
        </div>
    </div>
    );
}
}

export default App;
