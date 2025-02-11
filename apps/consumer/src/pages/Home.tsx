import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { StatusBar } from "@capacitor/status-bar";

import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

StatusBar.setOverlaysWebView({ overlay: false }).catch(console.error);

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	);
};

export default Home;
