import { IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonImg, IonCard, IonText } from '@ionic/react';
import { homeOutline, homeSharp, discOutline, discSharp, helpCircleOutline, helpCircleSharp, settingsOutline, settingsSharp, openOutline } from 'ionicons/icons';

import './Menu.css';

export const Menu = () => {
	return(
		<IonMenu side="start" contentId="main" class="side-menu" type="push">
            <div className="container">
                <IonList class="menu-list">
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={'/home'} routerDirection="none" lines="none" class="menu-item">
                            <IonIcon color="dark" icon={homeOutline} />
                            <IonLabel class="menu-item-label">Home</IonLabel>
                        </IonItem>

                        <IonItem button routerLink={'/'} routerDirection="none" lines="none" class="menu-item">
                            <IonIcon color="dark" icon={discOutline} />
                            <IonLabel class="menu-item-label">Tips & Trick</IonLabel>
                        </IonItem>

                        <IonItem button routerLink={'/'} routerDirection="none" lines="none" class="menu-item">
                            <IonIcon color="dark" icon={helpCircleOutline} />
                            <IonLabel class="menu-item-label">Help & Support</IonLabel>
                        </IonItem>

                        <IonItem button routerLink={'/'} routerDirection="none" lines="none" class="menu-item">
                            <IonIcon color="dark" icon={settingsOutline} />
                            <IonLabel class="menu-item-label">Settings</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>

                <IonCard class="speech-bubble">
                    <IonText color="dark">
                        <h6>
                            Get your claws around Joule today!<br/><br/>
                            <a className="orange-hyperlink" href="https://www.chefsteps.com/joule?utm_source=jouleApp&utm_medium=appBanner&utm_campaign=initial">Check it out</a>&nbsp;
                            <IonIcon class="orange-icon" icon={openOutline} />
                        </h6>
                    </IonText>
                </IonCard>
                <div className="triangle-down"></div>

                <IonImg src="assets/icon/menu/crab.png" class="crab-illust" />
            </div>
		</IonMenu>
	);
};
