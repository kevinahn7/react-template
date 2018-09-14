import React from "react";
import Keg from './Keg'
import PropTypes from 'prop-types';
import SelectedKeg from "./SelectedKeg";

class Kegs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeg: null
        }
        this.handleSelectedKeg = this.handleSelectedKeg.bind(this);
    }

    handleSelectedKeg(newSelectedKeg) {
        console.log(newSelectedKeg)
        this.setState({selectedKeg: newSelectedKeg});
    }


    render() {
        let kegsStyle = {
            backgroundColor: "rgba(255, 255 ,255, 0.8)"
        }
        let kegsDivStyle = {
            overflow: "auto",
            height: "70%",
            width: "80%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            padding: "20px",
            gridGap: "5px"
        }

        return (
            <div style={kegsStyle}>
                <h1>Kegs</h1>
                <div style={kegsDivStyle}>
                    {this.props.kegs.map((keg, index) => 
                        <Keg
                            name = {keg.name}
                            brewer = {keg.brewer}
                            abv = {keg.abv}
                            description = {keg.description}
                            price = {keg.price}
                            remaining = {keg.remaining}
                            key = {index}
                            onKegSelection = {this.handleSelectedKeg}
                            />
                    )}
                </div>
                <SelectedKeg selectedKeg={this.state.selectedKeg}/>
            </div>
        );
    }
}

Kegs.propTypes = {
    kegs: PropTypes.array
};


export default Kegs;