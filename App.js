import React from 'react';
import Welcome from './component/Welcome';
import AccountType from './component/AccountType';
import DoctorsLogin from './component/DoctorsLogin';
import DoctorsRegister from './component/DoctorsRegister';
import ProfessionalDetails from './component/DoctorsProfessionalDetails';
import AccountDetails from './component/DoctorsAccountDetails';
import ForgotPassword from './component/ForgotPassword';
import HowItWorks from './component/HowItWorks';
import HowItWorks2 from './component/HowItWorks2';
import HowItWorks3 from './component/HowItWorks3';
import { View} from 'react-native';

export default class App extends React.Component {
	render() {
		return (

    		<View>
				<Welcome ex/>
    		</View>
  		);
	}
}
