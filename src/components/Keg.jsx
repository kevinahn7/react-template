import React from 'react';
import PropTypes from 'prop-types';

function Keg(prop) {

    let kegStyle = {
        border: "1px black solid"
    }

    let nameStyle = {
        fontSize: "30px"
    }

    function handleTicketSelection() {
        prop.onKegSelection({name: prop.name, brewer: prop.brewer, abv: prop.abv, description: prop.description, price: prop.price, remaining: prop.remaining, index: prop.index});
    }

	return(
		<div style={kegStyle} onClick={handleTicketSelection}>
			<h3 style={nameStyle}>{prop.name}</h3>
			<h3>Brewer: {prop.brewer}</h3>
            <h3>Price: {prop.price}</h3>
            <h3>Remaining: {prop.remaining}</h3>
		</div>
	)
}

Keg.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    price: PropTypes.string,
    remaining: PropTypes.number,
    onTicketSelection: PropTypes.func
}

export default Keg;