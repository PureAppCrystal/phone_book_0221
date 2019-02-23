import React from 'react';
import PhoneBookContainer from 'containers/PhoneBookContainer'

const PhonebookPage = (props) => {
    const {location, match, history } = props;
    return(
        <div>
            <PhoneBookContainer location={location} match={match} history={history}/>
        </div>
    )
}

export default PhonebookPage;