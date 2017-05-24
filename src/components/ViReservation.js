import React from 'react'

import '../css/hello-world.css'

class ViReservation extends React.Component {
	render(){
		let reservation = [
            {
            outlet_name: 'HoiPOS Cafe (West)',
            confirm_id: 'GHYTGU6',
            reservation_timestamp: '12017-04-13 18:00:00',
            adult_pax:4,
            children_pax:3,
            salutation: 'Mr.',
            first_name: 'Torin',
            last_name: 'Nguyen',
            phone_country_code: '+65',
            phone: '98765432',
            email: 'torinnguyen@gmail.com',
            customer_remarks: 'equest for birthday party cake & song, need wheelchair access/assistant.',
            staff_remarks: 'Use different color & new line for staff note like this. This text can be quite long.',
            status: 'RESERVED',
            payment_currency: '$',
            payment_amount: '124',
            table_layout_name:'level 2',
            table_name:'A1'
        },
        {
            confirm_id: 'JE41ME7',
            reservation_timestamp: '2017-04-13 18:00:00',
            adult_pax:13,
            children_pax:3,
            salutation: 'Mr.',
            first_name: 'Tam',
            last_name: 'Nguyen',
            phone_country_code: '+65',
            phone: '98765432',
            email: 'tamnguyen@gmail.com',
            customer_remarks: 'equest for birthday party cake & song, need wheelchair access/assistant.',
            staff_remarks: 'Use different color & new line for staff note like this. This text can be quite long.',
            status: 'reminder sent',
            payment_currency: '$',
            payment_amount: '124',
            table_layout_name:'level 2',
            table_name:'A1'
        },
        {
            confirm_id: 'ASDWEFi',
            reservation_timestamp: '2017-04-13 18:00:00',
            adult_pax:13,
            children_pax:3,
            salutation: 'Mr.',
            first_name: 'Nam',
            last_name: 'Nguyen',
            phone_country_code: '+65',
            phone: '98765432',
            email: 'tamnguyen@gmail.com',
            customer_remarks: '',
            staff_remarks: 'user called in to cancel',
            status: 'user cancelled',
            payment_currency: '$',
            payment_amount: '87',
            table_layout_name:'',
            table_name:''
        },
        {
            confirm_id: 'qwertyu',
            reservation_timestamp: '2017-04-13 18:00:00',
            adult_pax:13,
            children_pax:3,
            salutation: 'Mr.',
            first_name: 'Nam',
            last_name: 'Nguyen',
            phone_country_code: '+65',
            phone: '98765432',
            email: 'tamnguyen@gmail.com',
            customer_remarks: 'equest for birthday party cake & song, need wheelchair access/assistant.',
            staff_remarks: 'Use different color & new line for staff note like this. This text can be quite long.',
            status: 'no show',
            payment_currency: '$',
            payment_amount: '87',
            table_layout_name:'',
            table_name:''
        },
         {
            confirm_id: 'qwertyu',
            reservation_timestamp: '2017-04-13 18:00:00',
            adult_pax:13,
            children_pax:3,
            salutation: 'Mr.',
            first_name: 'A',
            last_name: 'Nguyen',
            phone_country_code: '+65',
            phone: '98765432',
            email: 'tamnguyen@gmail.com',
            customer_remarks: 'equest for birthday party cake & song, need wheelchair access/assistant.',
            staff_remarks: 'Use different color & new line for staff note like this. This text can be quite long.',
            status: 'confirmed',
            payment_currency: '$',
            payment_amount: '87',
            table_layout_name:'',
            table_name:''
        },
        ];
       
		return (
			<div className="page-reservation">
                <div style={{background: 'red', display: 'flex', flexDirection: 'row'}}>
                    <div>ADFGH</div>
                    <div>ADFGH</div>
                    <div>ADFGH</div>
                    <div style={{display: 'flex', flex: 1}}></div>
                    <div>Stay at last</div>
                </div>
				<div className="header">
                    <div className="header-name">
                        <div>
                            <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </div>
                        <div>{reservation[0].outlet_name}</div>
                    </div>
                    <div className="header-time">
                        
                    </div>
                </div>
			</div>

		)
	}
}

export default ViReservation