import React from 'react';
import './WaterBox';

export default function WaterBox() {
    return (
        <div id="water-box">
                <div id="water">
                    {this.props.name}
                        <div id="waves">
                            <div id="wave" class="wave1"></div>
                            <div id="wave" class="wave2"></div>      
                            <div id="wave" class="wave3"></div>
                        </div>  
                    <div id="water-lvl"></div>
                </div>
        </div>
    )
}
